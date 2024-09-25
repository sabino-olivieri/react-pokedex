import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeText } from "../stores/slices/ToastSlice";

export default function Toast() {
    const text = useSelector((state) => state.toast)
    const dispatch = useDispatch();

    useEffect(()=> {
        
        setTimeout(() => {
            dispatch(changeText(''))
        }, 5000);
    },[text])

    return(
        <div className={`rounded bg-success ms_toast shadow ${text === '' ? 'hidden-toast' : ''} `}>
            <span className="mb-1 d-inline-block">{text}   <i class="fa-solid fa-check ms-2"></i></span>
            <div className={`bg-white rounded-5 mb-2 ${text !== '' ? 'w-100' : 'hidden-toast'}`} ></div>
        </div>
    )
}