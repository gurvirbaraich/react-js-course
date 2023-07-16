export default function Todo({ todo, completeTodo, deleteTodo }) {
  return (
    <li className="flex justify-between items-center">
      <p style={{ textDecoration: todo.completed ? "line-through" : "none" }} className="capitalize">
        {todo.title}
      </p>
      <div className="flex gap-1 mt-1">
        <button onClick={() => completeTodo(todo)} title={todo.completed ? "Incomplete Todo" : "Complete Todo"}>
          {todo.completed ? <Incomplete /> : <Complete />}
        </button>
        <button title="Delete Todo" onClick={() => deleteTodo(todo)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#9575CD"
              d="M34,12l-6-6h-8l-6,6h-3v28c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V12H34z"
            />
            <path
              fill="#7454B3"
              d="M24.5 39h-1c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v19C26 38.3 25.3 39 24.5 39zM31.5 39L31.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C33 38.3 32.3 39 31.5 39zM16.5 39L16.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C18 38.3 17.3 39 16.5 39z"
            />
            <path
              fill="#B39DDB"
              d="M11,8h26c1.1,0,2,0.9,2,2v2H9v-2C9,8.9,9.9,8,11,8z"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

const Complete = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="24px"
    height="24px"
  >
    <path d="M 20.064453 2.5234375 A 1.0001 1.0001 0 0 0 19.400391 2.7871094 L 15.847656 6.0429688 L 11.111328 6.8320312 A 1.0001 1.0001 0 0 0 10.347656 7.4472656 L 8.5722656 11.884766 L 4.6269531 14.648438 A 1.0001 1.0001 0 0 0 4.2011719 15.527344 L 4.4980469 20.363281 L 2.1308594 24.503906 A 1.0001 1.0001 0 0 0 2.1308594 25.496094 L 4.4980469 29.636719 L 4.2011719 34.472656 A 1.0001 1.0001 0 0 0 4.6269531 35.351562 L 8.5722656 38.115234 L 10.347656 42.552734 A 1.0001 1.0001 0 0 0 11.111328 43.167969 L 15.847656 43.957031 L 19.400391 47.212891 A 1.0001 1.0001 0 0 0 20.361328 47.433594 L 25 46.052734 L 29.638672 47.433594 A 1.0001 1.0001 0 0 0 30.599609 47.212891 L 34.152344 43.957031 L 38.888672 43.167969 A 1.0001 1.0001 0 0 0 39.652344 42.552734 L 41.427734 38.115234 L 45.373047 35.351562 A 1.0001 1.0001 0 0 0 45.798828 34.472656 L 45.501953 29.636719 L 47.869141 25.496094 A 1.0001 1.0001 0 0 0 47.869141 24.503906 L 45.501953 20.363281 L 45.798828 15.527344 A 1.0001 1.0001 0 0 0 45.373047 14.648438 L 41.427734 11.884766 L 39.652344 7.4472656 A 1.0001 1.0001 0 0 0 38.888672 6.8320312 L 34.152344 6.0429688 L 30.599609 2.7871094 A 1.0001 1.0001 0 0 0 29.638672 2.5664062 L 25 3.9472656 L 20.361328 2.5664062 A 1.0001 1.0001 0 0 0 20.064453 2.5234375 z M 20.333984 4.6445312 L 24.714844 5.9492188 A 1.0001 1.0001 0 0 0 25.285156 5.9492188 L 29.666016 4.6445312 L 33.019531 7.71875 A 1.0001 1.0001 0 0 0 33.53125 7.9667969 L 38.003906 8.7128906 L 39.681641 12.904297 A 1.0001 1.0001 0 0 0 40.037109 13.351562 L 43.767578 15.964844 L 43.488281 20.539062 A 1.0001 1.0001 0 0 0 43.617188 21.095703 L 45.847656 25 L 43.617188 28.904297 A 1.0001 1.0001 0 0 0 43.488281 29.460938 L 43.767578 34.035156 L 40.037109 36.648438 A 1.0001 1.0001 0 0 0 39.681641 37.095703 L 38.003906 41.287109 L 33.53125 42.033203 A 1.0001 1.0001 0 0 0 33.019531 42.28125 L 29.666016 45.355469 L 25.285156 44.050781 A 1.0001 1.0001 0 0 0 24.714844 44.050781 L 20.333984 45.355469 L 16.980469 42.28125 A 1.0001 1.0001 0 0 0 16.46875 42.033203 L 11.996094 41.287109 L 10.318359 37.095703 A 1.0001 1.0001 0 0 0 9.9628906 36.648438 L 6.2324219 34.035156 L 6.5117188 29.460938 A 1.0001 1.0001 0 0 0 6.3828125 28.904297 L 4.1523438 25 L 6.3828125 21.095703 A 1.0001 1.0001 0 0 0 6.5117188 20.539062 L 6.2324219 15.964844 L 9.9628906 13.351562 A 1.0001 1.0001 0 0 0 10.318359 12.904297 L 11.996094 8.7128906 L 16.46875 7.9667969 A 1.0001 1.0001 0 0 0 16.980469 7.71875 L 20.333984 4.6445312 z M 34.058594 14.458984 L 23.097656 31.46875 L 15.769531 24.857422 L 14.429688 26.341797 L 23.503906 34.53125 L 35.740234 15.541016 L 34.058594 14.458984 z" />
  </svg>
);

const Incomplete = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24px"
    height="24px"
  >
    <linearGradient
      id="hbE9Evnj3wAjjA2RX0We2a"
      x1="7.534"
      x2="27.557"
      y1="7.534"
      y2="27.557"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#f44f5a" />
      <stop offset=".443" stopColor="#ee3d4a" />
      <stop offset="1" stopColor="#e52030" />
    </linearGradient>
    <path
      fill="url(#hbE9Evnj3wAjjA2RX0We2a)"
      d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0 L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599 c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"
    />
    <linearGradient
      id="hbE9Evnj3wAjjA2RX0We2b"
      x1="27.373"
      x2="40.507"
      y1="27.373"
      y2="40.507"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#a8142e" />
      <stop offset=".179" stopColor="#ba1632" />
      <stop offset=".243" stopColor="#c21734" />
    </linearGradient>
    <path
      fill="url(#hbE9Evnj3wAjjA2RX0We2b)"
      d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019 c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"
    />
  </svg>
);