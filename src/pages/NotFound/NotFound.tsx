import { useNavigate } from "react-router";
import { Button } from "../../components";

export default function NotFound() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-y-1">
      <p className="text-5xl">404 Not Found</p>
      <div className="flex gap-x-2">
        <Button
          title="Go back"
          onClick={() => {
            window.history.length > 1 ? navigate(-1) : navigate("/");
          }}
        />
        <Button
          title="Go home"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}
