import { Messages } from "../const"

export default function getMessage(message){
    return Messages[message] || ''
}