#!/usr/bin/env python3
"""Soundtrack for 小奥迪A7的赛车梦: a bouncy toy-piano tune plus cartoon sound effects.

Everything is synthesised with NumPy and timed to the scenes in make_video.py:
    0.0  title (horn "嘀嘀" at 2.55)      4.5  countdown beeps 5.5 / 6.5 / 7.5, GO 8.5
    9.5  race (boost whoosh 12.9)          15.0 brakes, sad trombone, heave-ho 18.0/18.5/19.0
    19.4 "pop!" out of the mud             21.0 turbo sprint, finish line + cheers 24.2
    26.0 fanfare and fireworks

    python3 kids-video/soundtrack.py out.wav
"""
import math
import sys
import wave

import numpy as np

SR = 44100
DURATION = 30.0
N = int(SR * DURATION)
BEAT = 0.5  # 120 bpm
rng = np.random.default_rng(2026)


def midi(m):
    return 440.0 * 2 ** ((m - 69) / 12.0)


def tt(dur):
    return np.arange(int(SR * dur)) / SR


def add(buf, sig, t0, gain=1.0):
    i0 = int(round(t0 * SR))
    if i0 >= len(buf):
        return
    if i0 < 0:
        sig, i0 = sig[-i0:], 0
    n = min(len(sig), len(buf) - i0)
    buf[i0:i0 + n] += gain * sig[:n]


def _shape(x, fn):
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    return np.fft.irfft(X * fn(np.maximum(f, 1e-3)), len(x))


def lowpass(x, fc):
    return _shape(x, lambda f: 1 / np.sqrt(1 + (f / fc) ** 4))


def highpass(x, fc):
    return _shape(x, lambda f: (f / fc) ** 2 / np.sqrt(1 + (f / fc) ** 4))


def bandpass(x, lo, hi):
    return lowpass(highpass(x, lo), hi)


def fade(sig, a=0.004, r=0.02):
    n = len(sig)
    env = np.ones(n)
    na, nr = max(1, int(a * SR)), max(1, int(r * SR))
    env[:na] = np.linspace(0, 1, na)
    env[-nr:] *= np.linspace(1, 0, nr)
    return sig * env


# ---------------------------------------------------------------- instruments
def toy_piano(f, dur):
    t = tt(dur + 0.35)
    sig = (np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * 2 * f * t) + 0.12 * np.sin(2 * np.pi * 3 * f * t)
           + 0.25 * np.sin(2 * np.pi * 4.2 * f * t) * np.exp(-t * 25))
    env = (1 - np.exp(-t / 0.002)) * np.exp(-t * 3.0)
    env[int(SR * dur):] *= np.exp(-np.arange(len(t) - int(SR * dur)) / SR * 14)
    return fade(sig * env)


def pluck(f, dur):
    t = tt(dur + 0.2)
    sig = sum(np.sin(2 * np.pi * h * f * t) * np.exp(-t * (3 + h * 2.2)) / h for h in range(1, 8))
    return fade(sig * (1 - np.exp(-t / 0.003)))


def bass(f, dur):
    t = tt(dur)
    sig = np.sin(2 * np.pi * f * t) + 0.3 * np.sin(2 * np.pi * 2 * f * t) + 0.1 * np.sin(2 * np.pi * 3 * f * t)
    return fade(sig * np.exp(-t * 3.5), 0.004, 0.05)


def brass(f, dur, vib=0.0, wah=False):
    t = tt(dur)
    ph = 2 * np.pi * f * (t + vib * np.sin(2 * np.pi * 5.5 * t) / (2 * np.pi * 5.5))
    env = np.minimum(1, t / 0.05) * np.minimum(1, (dur - t) / 0.08)
    bright = 0.35 + 0.45 * (np.sin(np.pi * np.clip(t / dur, 0, 1)) if wah else 1.0)
    sig = sum((1.0 / h) * bright ** (h - 1) * np.sin(h * ph) for h in range(1, 12))
    return sig * env


def kick():
    t = tt(0.32)
    ph = 2 * np.pi * np.cumsum(48 + 110 * np.exp(-t * 32)) / SR
    return np.sin(ph) * np.exp(-t * 10)


def snare():
    t = tt(0.2)
    nz = highpass(rng.standard_normal(len(t)), 1500)
    return 0.55 * nz * np.exp(-t * 24) + 0.45 * np.sin(2 * np.pi * 185 * t) * np.exp(-t * 20)


def hat(open_=False):
    t = tt(0.22 if open_ else 0.06)
    nz = highpass(rng.standard_normal(len(t)), 7000)
    return nz * np.exp(-t * (14 if open_ else 70))


def crash():
    t = tt(1.6)
    return highpass(rng.standard_normal(len(t)), 4000) * np.exp(-t * 2.6)


# ---------------------------------------------------------------- the tune
CHORDS = {"C": ([60, 64, 67], 36), "G": ([59, 62, 67], 43), "Am": ([57, 60, 64], 45),
          "F": ([57, 60, 65], 41), "Dm": ([57, 62, 65], 38)}

# (beat, midi, beats) within a 4-beat bar
THEME_A = [
    [(0, 76, .5), (.5, 79, .5), (1, 81, .5), (1.5, 79, .5), (2, 76, 1), (3, 72, 1)],
    [(0, 74, .5), (.5, 76, .5), (1, 74, .5), (1.5, 71, .5), (2, 67, 1.5)],
    [(0, 72, .5), (.5, 76, .5), (1, 81, .5), (1.5, 79, .5), (2, 76, 1), (3, 72, .5), (3.5, 74, .5)],
    [(0, 76, .5), (.5, 74, .5), (1, 72, .5), (1.5, 69, .5), (2, 72, 2)],
]
THEME_B = [
    [(0, 79, .5), (.5, 79, .5), (1, 76, .5), (1.5, 79, .5), (2, 81, .5), (2.5, 79, .5), (3, 76, .5), (3.5, 74, .5)],
    [(0, 72, .5), (.5, 74, .5), (1, 76, .5), (1.5, 77, .5), (2, 81, 1), (3, 79, 1)],
    [(0, 71, .5), (.5, 74, .5), (1, 79, .5), (1.5, 74, .5), (2, 71, .5), (2.5, 74, .5), (3, 79, .5), (3.5, 81, .5)],
    [(0, 79, 1), (1, 76, .5), (1.5, 74, .5), (2, 72, 2)],
]


def play_bar(mel, bar, chord, t0, drums="light", lead=0.32, until=None):
    """One 2-second bar: melody + strummed chord + bass + drums."""
    for b, m, d in bar:
        if until is None or t0 + b * BEAT < until:
            add(mel, toy_piano(midi(m), d * BEAT), t0 + b * BEAT, lead)
    notes, root = CHORDS[chord]
    for beat in range(4):
        tb = t0 + beat * BEAT
        if until is not None and tb >= until:
            break
        for j, m in enumerate(notes):
            add(mel, pluck(midi(m), 0.45), tb + 0.012 * j, 0.07)
        if beat % 2 == 0 or drums == "drive":
            add(mel, bass(midi(root), 0.45), tb, 0.30)
        if drums:
            if beat % 2 == 0 or drums == "drive":
                add(mel, kick(), tb, 0.5)
            if beat % 2 == 1:
                add(mel, snare(), tb, 0.22)
            sub = 4 if drums == "drive" else 2
            for k in range(sub):
                add(mel, hat(), tb + k * BEAT / sub, 0.05 if k % 2 else 0.08)


def build_music():
    m = np.zeros(N)
    # 0 – 4.5  title theme
    play_bar(m, THEME_A[0], "C", 0.0)
    play_bar(m, THEME_A[1], "G", 2.0)
    add(m, crash(), 0.0, 0.10)
    # 4.5 – 8.5  countdown: pulsing bass on G, snare roll building up
    for k in range(8):
        tb = 4.5 + k * BEAT
        add(m, bass(midi(43), 0.4), tb, 0.18 + 0.02 * k)
        add(m, hat(), tb, 0.06)
        add(m, hat(), tb + 0.25, 0.04)
    for k in range(32):
        tb = 6.5 + k * 2.0 / 32
        add(m, snare(), tb, 0.04 + 0.16 * k / 32)
    # 8.5 – 15  race theme
    play_bar(m, THEME_B[0], "C", 8.5, "drive")
    play_bar(m, THEME_B[1], "F", 10.5, "drive")
    play_bar(m, THEME_B[2], "G", 12.5, "drive", until=14.75)
    add(m, crash(), 8.5, 0.16)
    # 15 – 19.4  uh-oh: sad trombone, then heave-ho
    for k, (f, d) in enumerate(((233.08, .33), (220.0, .33), (207.65, .33), (196.0, 1.1))):
        add(m, brass(f, d, vib=0.03 if k == 3 else 0.0, wah=True), 15.6 + k * 0.36, 0.16)
    for k, f in enumerate((midi(48), midi(50), midi(52))):
        tb = 18.0 + k * 0.5
        add(m, brass(f, 0.32), tb, 0.16)
        add(m, kick(), tb, 0.45)
    # 19.4  free! sparkle, then the happy theme, softly
    for k, n in enumerate((84, 88, 91, 96)):
        add(m, toy_piano(midi(n), 0.3), 19.4 + k * 0.07, 0.22)
    play_bar(m, THEME_A[2], "Am", 19.5, drums=None, lead=0.26, until=21.0)
    # 21 – 26  final sprint
    play_bar(m, THEME_B[0], "C", 21.0, "drive", lead=0.34)
    play_bar(m, THEME_B[2], "G", 23.0, "drive", lead=0.34)
    play_bar(m, THEME_B[3], "G", 25.0, "drive", lead=0.34, until=26.0)
    # 26 – 30  fanfare
    fan = [(0, 67, .5), (.5, 72, .5), (1, 76, .5), (1.5, 79, 1), (2.5, 76, .5), (3, 79, 1),
           (4, 81, .5), (4.5, 79, .5), (5, 77, .5), (5.5, 74, .5), (6, 84, 2)]
    for b, n, d in fan:
        add(m, toy_piano(midi(n), d * BEAT), 26.0 + b * BEAT, 0.36)
        add(m, brass(midi(n - 12), d * BEAT * 0.95), 26.0 + b * BEAT, 0.05)
    for k, ch in enumerate(("C", "F", "G", "C")):
        notes, root = CHORDS[ch]
        for beat in range(2):
            tb = 26.0 + k * 1.0 + beat * BEAT
            for j, n in enumerate(notes):
                add(m, pluck(midi(n), 0.45), tb + 0.012 * j, 0.08)
            add(m, bass(midi(root), 0.45), tb, 0.3)
            add(m, kick(), tb, 0.45)
            add(m, snare(), tb + 0.25, 0.10)
    add(m, crash(), 26.0, 0.18)
    add(m, crash(), 29.0, 0.2)
    for j, n in enumerate((60, 64, 67, 72)):
        add(m, pluck(midi(n), 1.0), 29.0 + 0.03 * j, 0.12)
    return m


# ---------------------------------------------------------------- sound effects
def engine():
    """One continuous engine voice following the A7 through the story."""
    keys = [  # (time, rpm-ish frequency Hz, loudness)
        (0.0, 62, 0.20), (1.6, 78, 0.24), (2.3, 46, 0.12), (4.5, 44, 0.10), (5.9, 44, 0.10), (6.1, 92, 0.2),
        (6.4, 46, 0.11), (6.9, 46, 0.11), (7.1, 100, 0.22), (7.4, 48, 0.12), (8.45, 50, 0.14), (8.6, 120, 0.32),
        (9.5, 150, 0.28), (12.8, 130, 0.22), (13.1, 175, 0.30), (14.2, 140, 0.22), (15.0, 130, 0.2),
        (16.3, 44, 0.08), (17.6, 46, 0.09), (17.8, 95, 0.2), (19.3, 110, 0.22), (19.5, 50, 0.1),
        (20.9, 56, 0.12), (21.1, 170, 0.32), (24.1, 195, 0.32), (25.0, 70, 0.12), (25.9, 46, 0.06), (26.3, 40, 0.0),
        (30.0, 40, 0.0)]
    kt = np.array([k[0] for k in keys])
    t = np.arange(N) / SR
    f = np.interp(t, kt, [k[1] for k in keys]) * (1 + 0.03 * np.sin(2 * np.pi * 3.1 * t))
    a = np.interp(t, kt, [k[2] for k in keys])
    push = (t > 17.8) & (t < 19.3)
    f[push] *= 1 + 0.18 * np.sin(2 * np.pi * 2.0 * (t[push] - 18.0)) ** 2
    ph = np.cumsum(f) / SR
    saw = 2 * (ph % 1.0) - 1
    sq = np.sign(np.sin(2 * np.pi * ph * 0.5))
    sig = (0.6 * saw + 0.4 * sq) * (1 + 0.35 * np.sin(2 * np.pi * ph * 0.25))
    return lowpass(sig, 700) * a


def beep(f, dur):
    t = tt(dur)
    sig = np.sin(2 * np.pi * f * t) + 0.25 * np.sign(np.sin(2 * np.pi * f * t))
    return fade(sig, 0.004, 0.04)


def horn(dur=0.16):
    t = tt(dur)
    sig = sum(np.sign(np.sin(2 * np.pi * f * t)) for f in (415.0, 523.0))
    return fade(lowpass(sig, 2400), 0.006, 0.03)


def whoosh(dur=0.9, lo=300, hi=3000):
    t = tt(dur)
    env = np.sin(np.pi * np.clip(t / dur, 0, 1)) ** 2
    return bandpass(rng.standard_normal(len(t)), lo, hi) * env


def squeal():
    t = tt(0.75)
    f = 2050 + 60 * np.sin(2 * np.pi * 23 * t)
    tone = np.sin(2 * np.pi * np.cumsum(f) / SR)
    return fade((0.6 * tone + 0.5 * bandpass(rng.standard_normal(len(t)), 1500, 4000)) * np.exp(-t * 3.5))


def splat():
    t = tt(0.35)
    f = 320 * np.exp(-t * 9) + 70
    return fade(np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 9)
                + 0.5 * lowpass(rng.standard_normal(len(t)), 600) * np.exp(-t * 14))


def pop():
    t = tt(0.14)
    f = 300 + 1600 * t / 0.14
    return fade(np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 18))


def cheer(dur=2.4):
    t = tt(dur)
    env = np.minimum(1, t / 0.25) * np.exp(-np.maximum(0, t - 0.8) * 1.3)
    crowd = bandpass(rng.standard_normal(len(t)), 500, 2600)
    mod = 1 + 0.4 * np.sin(2 * np.pi * 3.3 * t) * np.sin(2 * np.pi * 0.7 * t + 1)
    sig = crowd * env * mod * 0.6
    for _ in range(46):  # claps
        c0 = rng.uniform(0, dur - 0.2)
        cl = bandpass(rng.standard_normal(int(0.03 * SR)), 900, 3500) * np.exp(-np.arange(int(0.03 * SR)) / SR * 120)
        add(sig, cl * (1 - c0 / dur), c0, 1.2)
    for c0 in (0.1, 0.9):  # whistles
        tw = tt(0.5)
        fw = 1100 + 900 * np.sin(np.pi * tw / 0.5) + 30 * np.sin(2 * np.pi * 9 * tw)
        add(sig, fade(np.sin(2 * np.pi * np.cumsum(fw) / SR)) * 0.25, c0)
    return sig


def firework_fx():
    t = tt(1.4)
    sig = np.zeros(len(t))
    tw = tt(0.45)
    fw = 1300 + 1000 * tw / 0.45
    add(sig, fade(np.sin(2 * np.pi * np.cumsum(fw) / SR)) * 0.16, 0.0)
    tb = tt(0.6)
    boom = lowpass(rng.standard_normal(len(tb)), 900) * np.exp(-tb * 7) + np.sin(2 * np.pi * 58 * tb) * np.exp(-tb * 9)
    add(sig, boom, 0.45)
    for _ in range(26):  # crackles
        c0 = 0.55 + rng.uniform(0, 0.75)
        cl = highpass(rng.standard_normal(int(0.008 * SR)), 2500)
        add(sig, cl * 0.5 * (1.35 - c0), c0)
    return sig


def build_sfx():
    s = np.zeros(N)
    add(s, engine(), 0.0, 1.0)
    add(s, horn(), 2.55, 0.35)
    add(s, horn(), 2.78, 0.35)
    for tb in (5.5, 6.5, 7.5):
        add(s, beep(880.0, 0.22), tb, 0.30)
    add(s, beep(1760.0, 0.6), 8.5, 0.30)
    add(s, whoosh(1.0), 8.45, 0.25)
    add(s, whoosh(0.8), 12.85, 0.25)
    add(s, squeal(), 15.0, 0.22)
    for tb in (15.45, 16.1, 16.7, 17.75, 18.25, 18.75):
        add(s, splat(), tb, 0.30)
    add(s, pop(), 19.4, 0.35)
    add(s, whoosh(1.1, 200, 2500), 20.95, 0.32)
    add(s, crash(), 24.2, 0.22)
    add(s, pop(), 24.2, 0.3)
    add(s, cheer(), 24.15, 0.38)
    for tb in (26.05, 26.65, 27.25, 27.85, 28.45, 29.05):  # matches the fireworks in scene_podium
        add(s, firework_fx(), tb - 0.45, 0.3)
    add(s, toy_piano(midi(96), 0.4), 28.6, 0.2)  # the "完" stamp
    return s


def build():
    mix = build_music() * 0.85 + build_sfx()
    mix = np.tanh(mix * 1.1)
    t = np.arange(N) / SR
    mix *= np.clip((DURATION - t) / 0.6, 0, 1) ** 0.5   # gentle fade-out
    mix *= 0.89 / (np.max(np.abs(mix)) + 1e-9)
    return mix


def write_wav(path, mono):
    st = np.stack([mono, mono], 1)
    pcm = (np.clip(st, -1, 1) * 32767).astype("<i2")
    with wave.open(path, "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())


if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "soundtrack.wav"
    write_wav(out, build())
    print(out)
