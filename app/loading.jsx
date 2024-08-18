'use client';
import { ClipLoader } from "react-spinners";

export default function LoadingPage() {
  // Or a custom loading skeleton component
  const override = {
  display: "block",
  margin: "100px auto",
};  
  return (
  <div className="sweet-loading">
    {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
    <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

    <ClipLoader
      color="#36d7b7"
      loading="true"
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>);
}