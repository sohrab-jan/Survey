import { useStateContext } from "../contexts/ContextProvider"

export default function Toast() {
const {toast, setToast} = useStateContext();

  return (
    <>
    {toast.show && (<div className="py-2 px-3 text-white rounded bg-emerald-500 fixed right-4 bottom-4 z-50">
        {toast.message}
      </div>)
    }
    </>
  )
}
