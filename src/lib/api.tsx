import axios from "axios"

// 상품 전체 조회 - home 페이지
export const GetproductList = ()=>axios.get("http://localhost:4000/content/list")