import axios from "axios"
import {
  TST_TC1047HFGHEYIRKD_USERNAME,
  TST_TC1047HFGHEYIRKD_PASSWORD
} from "react-native-dotenv"
const tSTTChfgheyirkd = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047HFGHEYIRKD_USERNAME,
    password: TST_TC1047HFGHEYIRKD_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
