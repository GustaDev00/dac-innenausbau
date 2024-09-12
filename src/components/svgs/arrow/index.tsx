export const Arrow = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="15"
    viewBox="0 0 9 15"
    fill="none"
    {...props}
  >
    <path
      d="M3.35885 1.4807L8.37983 6.72545C8.50104 6.85599 8.56165 7.0075 8.56165 7.18C8.56165 7.35249 8.50104 7.50401 8.37983 7.63454L3.35885 12.8793C3.22832 13.0098 3.07214 13.0774 2.89032 13.0821C2.7085 13.0868 2.55232 13.0262 2.42179 12.9003C2.29125 12.7744 2.22365 12.6206 2.21899 12.4387C2.21433 12.2569 2.27727 12.1007 2.4078 11.9702L6.99521 7.18699L2.4078 2.38979C2.27727 2.25925 2.21433 2.10307 2.21899 1.92126C2.22365 1.73944 2.29125 1.58559 2.42179 1.45972C2.55232 1.33384 2.7085 1.27324 2.89032 1.2779C3.07214 1.28256 3.22832 1.35016 3.35885 1.4807Z"
      fill="black"
    />
  </svg>
);
