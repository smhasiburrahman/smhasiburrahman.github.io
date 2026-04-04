---
layout: post
title: "100 Days Of Flutter Challenge"
date: 2026-03-31
---

<div class="post-hero">
  <div class="post-hero-text">
    <span class="post-tag">🚀 100 Days Challenge</span>
    <p>My journey of learning <strong>Flutter</strong> from scratch and building real-world apps.</p>
  </div>
  <div class="post-hero-img">
    <img src="https://storage.googleapis.com/cms-storage-bucket/780e0e64d323aad2cdd5.png" alt="Flutter">
  </div>
</div>

<div class="day-card">

## Day 1 — Flutter Journey Begins

**What I learned:**
- What is Flutter and Dart
- How to setup Flutter environment
- Created my first Hello World app

**What is Flutter?**

Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.

</div>

<div class="day-card">

## Day 2 — Dart Language Basics

**What I learned:**
- Dart is case sensitive
- Statements and Semicolons
- Comments in Dart
- Dart Keywords
- Variables and Data Types
- Boolean in Dart

**Dart is Case Sensitive**

In Dart, `name` and `Name` are two different things. Always be careful with uppercase and lowercase letters.

**Statements and Semicolons**

Every line of instruction in Dart is called a statement. Each statement must end with a semicolon `;`
```dart
void main() {
  print("Hello Dart");
}
```

**Comments in Dart**

Comments are notes in your code that Dart ignores when running.
```dart
// This is a single line comment

/* This is a
   multi-line comment */
```

**Dart Keywords**

Keywords are reserved words in Dart that have special meaning. Examples: `void`, `var`, `int`, `double`, `bool`, `String`, `if`, `else`, `for`, `while`, `return` etc.

> You cannot use keywords as variable names.

**Variables and Data Types**

A variable is a container that stores data. Dart has the following data types:

| Type | Description | Example |
|------|-------------|---------|
| `int` | Whole numbers | `10`, `25` |
| `double` | Decimal numbers | `3.14` |
| `String` | Text | `"Hello"` |
| `bool` | True or False | `true`, `false` |
```dart
void main() {
  var intNumber = 10;
  print(intNumber); // Output: 10
}
```

**Variable Name Rules**

- Variable names are case sensitive (`sum` and `Sum` are different)
- Use camelCase for variable names — `intNumber`, `myName`
- Keep names short and meaningful
- Cannot start with a number

**Boolean in Dart**

A boolean stores only two values — `true` or `false`.
```dart
void main() {
  bool isFlutterFun = true;
  bool isDartHard = false;

  print(isFlutterFun); // Output: true
  print(isDartHard);   // Output: false
}
```

**Key Takeaway**

Dart is a strongly typed, case-sensitive language. Every statement ends with `;` and variables must have proper names following camelCase convention.

</div>
