---
layout: post
title: "Windows MessageBox() 함수 완벽 가이드"
date: 2026-01-20 02:00:00 +0900
category: Development
tags: [DirectX11, Windows, WinAPI]
description: "Windows MessageBox() 함수의 매개변수, 스타일 옵션, 반환값을 상세히 알아본다"
---

`MessageBox()` 함수는 Windows에서 **알림 창(대화상자)**을 표시하는 함수다. 사용자에게 정보를 전달하거나 확인을 요청할 때 사용한다.

## 함수 정의

```cpp
int MessageBox(
  HWND    hWnd,         // 부모 창 핸들
  LPCWSTR lpText,       // 표시할 메시지 내용
  LPCWSTR lpCaption,    // 메시지 박스 제목
  UINT    uType         // 메시지 박스 스타일
);
```

## 매개변수 설명

### hWnd (부모 창 핸들)
메시지 박스가 소속될 부모 창의 핸들. `NULL`을 지정하면 독립적으로 표시된다.

### lpText (메시지 내용)
사용자에게 보여줄 텍스트 내용.

### lpCaption (제목)
메시지 박스 상단에 표시될 제목.

### uType (스타일)
메시지 박스의 버튼, 아이콘, 기본 버튼 등을 설정한다.

---

## uType 옵션

### 버튼 종류

| 옵션 | 설명 |
|------|------|
| `MB_OK` | "확인" 버튼만 표시 |
| `MB_OKCANCEL` | "확인"과 "취소" 버튼 |
| `MB_YESNO` | "예"와 "아니오" 버튼 |
| `MB_RETRYCANCEL` | "재시도"와 "취소" 버튼 |

### 아이콘 종류

| 옵션 | 설명 |
|------|------|
| `MB_ICONINFORMATION` | 정보 아이콘 (i) |
| `MB_ICONWARNING` | 경고 아이콘 (느낌표) |
| `MB_ICONERROR` | 오류 아이콘 (빨간 X) |
| `MB_ICONQUESTION` | 질문 아이콘 (물음표) |

### 기본 버튼 설정

| 옵션 | 설명 |
|------|------|
| `MB_DEFBUTTON1` | 첫 번째 버튼이 기본 |
| `MB_DEFBUTTON2` | 두 번째 버튼이 기본 |
| `MB_DEFBUTTON3` | 세 번째 버튼이 기본 |

---

## 사용 예시

### 기본 알림

```cpp
MessageBox(NULL, L"작업이 완료되었습니다.", L"알림", MB_OK);
```

### 확인/취소 선택

```cpp
int result = MessageBox(NULL, L"파일을 저장하시겠습니까?", L"저장", MB_OKCANCEL);
if (result == IDOK) {
    // 저장 처리
} else {
    // 취소 처리
}
```

### 예/아니오 선택 + 아이콘

```cpp
int result = MessageBox(NULL, L"정말로 종료하시겠습니까?", L"종료 확인", MB_YESNO | MB_ICONQUESTION);
if (result == IDYES) {
    // 종료 처리
}
```

### 오류 메시지

```cpp
MessageBox(NULL, L"파일을 열 수 없습니다.", L"오류", MB_OK | MB_ICONERROR);
```

---

## 반환값

| 반환값 | 설명 |
|--------|------|
| `IDOK` | "확인" 버튼 클릭 |
| `IDCANCEL` | "취소" 버튼 클릭 |
| `IDYES` | "예" 버튼 클릭 |
| `IDNO` | "아니오" 버튼 클릭 |
| `IDRETRY` | "재시도" 버튼 클릭 |

---

## 정리

`MessageBox()`는 사용자와의 상호작용을 위한 기본적인 방법이다. 다양한 옵션 조합으로 상황에 맞는 대화상자를 만들 수 있다.
