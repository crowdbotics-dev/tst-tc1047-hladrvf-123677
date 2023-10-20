import axios from "axios"
import {
  TST_TC1047EYVPYIKNWP_PASSWORD,
  TST_TC1047EYVPYIKNWP_USERNAME
} from "react-native-dotenv"
const tSTTCeyvpyiknwp = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047EYVPYIKNWP_PASSWORD,
    password: TST_TC1047EYVPYIKNWP_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
