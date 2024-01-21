import { useRouteError } from "react-router-dom"
export default function Error() {
    const err=useRouteError();
    console.log(err)
  return (
    <div>
        <h1>OOPS Something Went Wrong</h1>
        {err.data}</div>
  )
}
