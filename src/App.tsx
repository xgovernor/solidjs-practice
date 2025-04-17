import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class="text-center">
      <header class={styles.header}>
        <img
          src={logo}
          class="animate-spin infinite duration-[20000]  h-[40vmin] pointer-events-none"
          alt="logo"
        />
        <p class="text-red-600">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
