import axios from "axios"
import {
  TST_TC1047LRQYSUJLXA_PASSWORD,
  TST_TC1047LRQYSUJLXA_USERNAME
} from "react-native-dotenv"
const tSTTClrqysujlxa = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047LRQYSUJLXA_PASSWORD,
    password: TST_TC1047LRQYSUJLXA_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
