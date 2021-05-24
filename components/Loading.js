import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="lading"
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3cbc28" size={30} />
      </div>
    </center>
  );
}

export default Loading;
