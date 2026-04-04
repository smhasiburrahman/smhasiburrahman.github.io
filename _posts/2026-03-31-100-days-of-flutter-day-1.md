---
layout: post
title: "100 Days Of Flutter Challenge"
date: 2026-03-31
---

<div class="post-hero">
  <div class="post-hero-text">
    <span class="post-tag">100 Days Challenge</span>
    <p>My journey of learning <strong>Flutter</strong> from scratch and building real-world apps.</p>
  </div>
  <div class="post-hero-img">
    <img src="https://storage.googleapis.com/cms-storage-bucket/780e0e64d323aad2cdd5.png" alt="Flutter">
  </div>
</div>

<div class="day-card">
  <h2>Day 1 — Flutter Journey Begins</h2>
  <p><strong>What I learned:</strong></p>
  <ul>
    <li>What is Flutter and Dart</li>
    <li>How to setup Flutter environment</li>
    <li>Created my first Hello World app</li>
  </ul>
  <p><strong>What is Flutter?</strong></p>
  <p>Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.</p>
</div>

<div class="day-card">
  <h2>Day 2 — Dart Language Basics</h2>

  <p><strong>What I learned:</strong></p>
  <ul>
    <li>Dart is case sensitive</li>
    <li>Statements and Semicolons</li>
    <li>Comments in Dart</li>
    <li>Dart Keywords</li>
    <li>Variables and Data Types</li>
    <li>Boolean in Dart</li>
  </ul>

  <h3>Dart is Case Sensitive</h3>
  <p>In Dart, <code>name</code> and <code>Name</code> are two different things. Always be careful with uppercase and lowercase letters.</p>

  <h3>Statements and Semicolons</h3>
  <p>Every line of instruction in Dart is called a statement. Each statement must end with a semicolon <code>;</code></p>
  <pre><code>void main() {
  print("Hello Dart");
}</code></pre>

  <h3>Comments in Dart</h3>
  <p>Comments are notes in your code that Dart ignores when running.</p>
  <pre><code>// This is a single line comment

/* This is a
   multi-line comment */</code></pre>

  <h3>Dart Keywords</h3>
  <p>Keywords are reserved words in Dart that have special meaning. Examples: <code>void</code>, <code>var</code>, <code>int</code>, <code>double</code>, <code>bool</code>, <code>String</code>, <code>if</code>, <code>else</code>, <code>return</code></p>
  <blockquote>You cannot use keywords as variable names.</blockquote>

  <h3>Variables and Data Types</h3>
  <p>A variable is a container that stores data. Dart has the following data types:</p>
  <table>
    <thead>
      <tr><th>Type</th><th>Description</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr><td><code>int</code></td><td>Whole numbers</td><td><code>10, 25</code></td></tr>
      <tr><td><code>double</code></td><td>Decimal numbers</td><td><code>3.14</code></td></tr>
      <tr><td><code>String</code></td><td>Text</td><td><code>"Hello"</code></td></tr>
      <tr><td><code>bool</code></td><td>True or False</td><td><code>true, false</code></td></tr>
    </tbody>
  </table>
  <pre><code>void main() {
  var intNumber = 10;
  print(intNumber); // Output: 10
}</code></pre>

  <h3>Variable Name Rules</h3>
  <ul>
    <li>Variable names are case sensitive — <code>sum</code> and <code>Sum</code> are different</li>
    <li>Use camelCase — <code>intNumber</code>, <code>myName</code></li>
    <li>Keep names short and meaningful</li>
    <li>Cannot start with a number</li>
  </ul>

  <h3>Boolean in Dart</h3>
  <p>A boolean stores only two values — <code>true</code> or <code>false</code>.</p>
  <pre><code>void main() {
  bool isFlutterFun = true;
  bool isDartHard = false;

  print(isFlutterFun); // Output: true
  print(isDartHard);   // Output: false
}</code></pre>

  <h3>Key Takeaway</h3>
  <p>Dart is a strongly typed, case-sensitive language. Every statement ends with <code>;</code> and variables must have proper names following camelCase convention.</p>
</div>
