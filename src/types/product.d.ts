// owner
export type Users = {
    birth:string;
    createdAt:string;
    deleteAt:string;
    email:string;
    gender:number;
    grade:number;
    id:number;
    latitude:number;
    location:string;
    longitude:number;
    name:string;
    nickname:string;
    password:string;
    university:string;
    updatedAt:string;
    // profile_image추가해야함
  }
  
  // 상품 타입
  export type productListType = {
      
    body: string;
    
    category: string;
    
    chat_cnt: number;
  
    completed: boolean;
    
    createdAt: string;
    
    completed_date: string;
    
    deletedAt: string | null;
  
    id: number;
  
    images: string[];
    
    latitude: number;
    
    like_cnt: number;
  
    location: string;
    
    longitude: number;
    
    owner: Users;
    
    price: number;
    
    title: string;
  
    buyer: Users;
  
    updatedAt: string;
  }