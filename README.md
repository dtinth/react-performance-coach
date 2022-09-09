# react-performance-coach

A little library to help you write more performant React apps.

It provides a hook `usePerformanceCoach` that causes your component to re-render itself every 1 second. Once you do this, you can use [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to see which components are re-rendering needlessly. You can then use this information to optimize your app.

Generally, it is fine to re-render a few _top-level components_ every second — if it doesn’t lead to a snowball effect where a top-level component causes the entire subtree to re-render itself.

![image](https://user-images.githubusercontent.com/193136/189275695-313c5ab5-d2fc-4fd1-b882-cd5c3cd492cf.png)

## How to use

1.  Install the `react-performance-coach` package and install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) in your browser.

    ```bash
    yarn add react-performance-coach
    ```

2.  In your main app component, use the `usePerformanceCoach` hook.

    ```jsx
    import { usePerformanceCoach } from 'react-performance-coach'

    export default function App() {
      usePerformanceCoach()
      // ...
    }
    ```

3.  In the page component that you want to optimize, use the `usePerformanceCoach` hook.

    ```jsx
    import { usePerformanceCoach } from 'react-performance-coach'

    export default function ChatPage() {
      usePerformanceCoach()
      // ...
    }
    ```

4.  Run your app in a development server.

5.  Open React Developer Tools and make sure that **Highlight updates when components render** is enabled.

      <img width="422" alt="image" src="https://user-images.githubusercontent.com/193136/189144617-77c74dfe-c004-4f29-b6c0-f98679afa320.png">

6.  Every second, the components that has performance coach installed will re-render. There will be a flashing box around the component that re-rendered.

      <img width="1003" alt="image" src="https://user-images.githubusercontent.com/193136/189145593-4fc8358d-1802-441a-bbdf-bb5dc3f3a006.png">

    Ideally, when you see a flashing box around a component, something in that box should have changed. If nothing has changed, then you know that the component is re-rendering needlessly.

    Generally, it is fine to have a few components that re-render needlessly. But if you have hundreds of consistently flashing boxes, then that would indicate that you have a performance problem.

7.  Use the above information to optimize your app. For example, if you see a flashing box around a component that renders a list of items, then you can use [`React.memo`](https://reactjs.org/docs/react-api.html#reactmemo) to prevent the component from re-rendering when the list of items does not change.

    Once optimized, there should be a smaller number of flashing boxes.

      <img width="1003" alt="image" src="https://user-images.githubusercontent.com/193136/189147472-dacfa6b2-d7cb-4f46-b225-d5bc0eaf948d.png">

## API reference

<https://apiref.page/package/react-performance-coach>

[![API reference screenshot](https://ss.dt.in.th/api/screenshots/apiref-react-performance-coach.png)](https://apiref.page/package/react-performance-coach)
