---
layout: post
title: "ASCII vs Unicode - L 접두사의 의미"
date: 2026-01-20 03:00:00 +0900
category: Development
tags: [DirectX11, Windows, Encoding]
description: "Windows 프로그래밍에서 L 접두사와 ASCII, Unicode의 차이를 알아본다"
---

Windows 프로그래밍에서 문자열 앞에 붙는 `L` 접두사가 무엇인지 알아보자.

## L 접두사란?

```cpp
// ASCII 문자열 (char)
const char* text = "Hello, World!";

// Unicode 문자열 (wchar_t)
const wchar_t* text = L"안녕하세요, 세계!";
```

`L` 접두사는 문자열을 **Unicode (Wide Character)**로 처리하라는 의미다.

---

## ASCII vs Unicode 비교

|  | **ASCII** | **Unicode** |
|--|-----------|-------------|
| **문자 표현 범위** | 128개 (영어, 숫자, 일부 특수문자) | 거의 모든 언어의 문자 |
| **문자 크기** | 1바이트 (8비트) | 2바이트 (UTF-16) 또는 4바이트 (UTF-32) |
| **언어 지원** | 영어 기반 | 전 세계 모든 언어 (한글, 일본어 등) |
| **자료형** | `char` | `wchar_t` |
| **문자열 접두사** | 없음 | `L` |

---

## 왜 Unicode를 사용하는가?

### ASCII의 한계

```cpp
// ASCII로는 한글 표현 불가
const char* text = "안녕하세요";  // 깨질 수 있음
```

### Unicode로 해결

```cpp
// Unicode로 한글 정상 표현
const wchar_t* text = L"안녕하세요";  // 정상 동작
```

---

## Windows API와 Unicode

Windows API는 대부분 **두 가지 버전**을 제공한다:

| 함수 | ASCII 버전 | Unicode 버전 |
|------|-----------|-------------|
| MessageBox | `MessageBoxA()` | `MessageBoxW()` |
| CreateWindow | `CreateWindowA()` | `CreateWindowW()` |

`MessageBox()`를 호출하면 프로젝트 설정에 따라 자동으로 A 또는 W 버전이 선택된다.

### UNICODE 매크로

```cpp
#ifdef UNICODE
    #define MessageBox MessageBoxW
#else
    #define MessageBox MessageBoxA
#endif
```

---

## 실무 권장사항

1. **항상 Unicode 사용** - 다국어 지원을 위해
2. **L 접두사 사용** - 문자열 리터럴에 항상 붙이기
3. **wchar_t 사용** - char 대신 wide character 사용

```cpp
// 권장하는 방식
const wchar_t* message = L"Hello, 세계!";
MessageBox(NULL, message, L"Title", MB_OK);
```

---

## 정리

| 구분 | ASCII | Unicode |
|------|-------|---------|
| 접두사 | 없음 | `L` |
| 자료형 | `char` | `wchar_t` |
| 문자열 타입 | `LPSTR` | `LPWSTR` |
| 함수 접미사 | `A` | `W` |

현대 Windows 프로그래밍에서는 **Unicode를 기본으로 사용**하는 것이 표준이다.
