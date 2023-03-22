import React from 'react';

import { useQuery } from "react-query";
import { productListType } from "../types/product";
import axios from "axios";


interface ResponseData {
    // API 응답 데이터 타입 정의
    data: productListType[];
  }
  
const getProductList = async (): Promise<productListType[]> => {
const response = await axios.get<ResponseData>("http://localhost:4000/content/list");
return response.data.data;
};

const Example = () => {
    const result  = useQuery<productListType[], unknown>("productList", getProductList, {
        keepPreviousData: true,
      });
        console.log(result)
    
      if (status==='loading') return "Loading...";
    
      if (status==='error') return "An error has occurred: " + "데이터를 불러오지 못하였습니다";
    return (
        <div>    
        {/* {productList.map((product)=>(
          <div  key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>{product.owner.name}</p>
            <p>{product.body}</p>
            <p>{product.price}</p>
          </div>
        ))} */}
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </div>
    );
};

export default Example;