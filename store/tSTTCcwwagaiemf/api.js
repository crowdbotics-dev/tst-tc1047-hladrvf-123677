import axios from "axios"
import {
  TST_TC1047CWWAGAIEMF_PASSWORD,
  TST_TC1047CWWAGAIEMF_USERNAME
} from "react-native-dotenv"
const tSTTCcwwagaiemf = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047CWWAGAIEMF_PASSWORD,
    password: TST_TC1047CWWAGAIEMF_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
