---
layout: post
title: "WinMain 기본 구조와 첫 번째 윈도우 프로그램"
date: 2026-01-20 01:00:00 +0900
category: Development
tags: [DirectX11, Windows, WinAPI]
description: "Windows 애플리케이션의 진입점인 WinMain 함수의 기본 구조를 알아본다"
---

Windows 애플리케이션을 만들기 위한 첫 번째 단계로, **WinMain** 함수의 기본 구조를 살펴보자.

## WinMain 기본 구조

```cpp
#include <windows.h>

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    MessageBox(NULL, L"Hello, DirectX!", L"WinMain", MB_OK);
    return 0;
}
```

## 매개변수 설명

| 매개변수 | 설명 |
|----------|------|
| `hInstance` | 현재 애플리케이션의 인스턴스 핸들 |
| `hPrevInstance` | 이전 인스턴스 핸들 (항상 NULL, 16비트 호환용) |
| `lpCmdLine` | 명령줄 인수 문자열 |
| `nCmdShow` | 창 표시 방법 (SW_SHOW, SW_HIDE 등) |

## WINAPI 호출 규약

`WINAPI`는 `__stdcall` 호출 규약을 의미한다. Windows API 함수들은 이 규약을 사용하며, 스택 정리를 호출된 함수가 담당한다.

## 다음 단계

이제 기본 구조를 이해했으니, `MessageBox()` 함수에 대해 더 자세히 알아보자.
