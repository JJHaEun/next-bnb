const EmailSVG = () => {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.306396 0V13.5H21.9999V0H0.306396ZM6.2929 5.94675L2.11419 10.2308V3.13725L6.2929 5.94675V5.94675ZM2.54987 1.5H19.7555L11.1532 7.28475L2.54987 1.5V1.5ZM7.69665 6.891L11.1532 9.21525L14.6151 6.88725L19.6877 12H2.71347L7.69665 6.891ZM16.0197 5.943L20.1921 3.13725V10.1483L16.0197 5.943Z"
        fill="#222222"
      />
    </svg>
  );
};

export default function EmailIcon(): JSX.Element {
  return <EmailSVG />;
}
