export function RowHeadIcon() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M4.71967 10.7197C5.01256 10.4268 5.48744 10.4268 5.78033 10.7197L9 13.9393L12.2197 10.7197C12.5126 10.4268 12.9874 10.4268 13.2803 10.7197C13.5732 11.0126 13.5732 11.4874 13.2803 11.7803L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303L4.71967 11.7803C4.42678 11.4874 4.42678 11.0126 4.71967 10.7197Z"
          fill="#ADADAD"
        />
        <path
          d="M8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967L13.2803 6.21967C13.5732 6.51256 13.5732 6.98744 13.2803 7.28033C12.9874 7.57322 12.5126 7.57322 12.2197 7.28033L9 4.06066L5.78033 7.28033C5.48744 7.57322 5.01256 7.57322 4.71967 7.28033C4.42678 6.98744 4.42678 6.51256 4.71967 6.21967L8.46967 2.46967Z"
          fill="#1A1A1A"
        />
      </svg>
    </div>
  );
}

export function Redirect() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M3.75 5.25C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6V14.25C3 14.4489 3.07902 14.6397 3.21967 14.7803C3.36032 14.921 3.55109 15 3.75 15H12C12.1989 15 12.3897 14.921 12.5303 14.7803C12.671 14.6397 12.75 14.4489 12.75 14.25V9.75C12.75 9.33579 13.0858 9 13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V14.25C14.25 14.8467 14.0129 15.419 13.591 15.841C13.169 16.2629 12.5967 16.5 12 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75H8.25C8.66421 3.75 9 4.08579 9 4.5C9 4.91421 8.66421 5.25 8.25 5.25H3.75Z"
          fill="#4643EE"
        />
        <path
          d="M10.5 2.25C10.5 1.83579 10.8358 1.5 11.25 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25V6.75C16.5 7.16421 16.1642 7.5 15.75 7.5C15.3358 7.5 15 7.16421 15 6.75V3H11.25C10.8358 3 10.5 2.66421 10.5 2.25Z"
          fill="#4643EE"
        />
        <path
          d="M16.2803 1.71967C16.5732 2.01256 16.5732 2.48744 16.2803 2.78033L8.03033 11.0303C7.73744 11.3232 7.26256 11.3232 6.96967 11.0303C6.67678 10.7374 6.67678 10.2626 6.96967 9.96967L15.2197 1.71967C15.5126 1.42678 15.9874 1.42678 16.2803 1.71967Z"
          fill="#4643EE"
        />
      </svg>
    </div>
  );
}

export function Circle({ color }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
      >
        <circle cx="5" cy="5" r="5" fill={color} />
      </svg>
    </div>
  );
}

export function OrderBy() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.52851 5.5286C3.78886 5.26825 4.21097 5.26825 4.47132 5.5286L7.99992 9.05719L11.5285 5.5286C11.7889 5.26825 12.211 5.26825 12.4713 5.5286C12.7317 5.78895 12.7317 6.21106 12.4713 6.47141L8.47132 10.4714C8.21097 10.7318 7.78886 10.7318 7.52851 10.4714L3.52851 6.47141C3.26816 6.21106 3.26816 5.78895 3.52851 5.5286Z"
        fill="#777676"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <div>
      <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
          fill="#ADADAD"
        />
        <path
          d="M11.9571 11.9572C12.25 11.6643 12.7249 11.6643 13.0178 11.9572L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5125 16.5732 15.2196 16.2803L11.9571 13.0178C11.6642 12.7249 11.6642 12.2501 11.9571 11.9572Z"
          fill="#ADADAD"
        />
      </svg>
    </div>
  );
}

export function CancelIcon() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"
          fill="#050505"
        />
        <path
          d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
          fill="#050505"
        />
      </svg>
    </div>
  );
}
