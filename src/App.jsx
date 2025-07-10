import { IoIosArrowDown } from "react-icons/io";
import "./App.css";
import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlinePaperClip } from "react-icons/hi";
import { useState } from "react";
import { LuSend } from "react-icons/lu";

const chatList = [
  {
    name: "Thanh Thảo",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/517617840_1463474628142197_5621266106169249542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG49KFipnIt5-xuWcczIkEGTt1W_nUKSQJO3Vb-dQpJApmKGYok3xk_xDg_L_bVh8rT2S5gJmSpm4L58Uwr0IAU&_nc_ohc=pFY6LA2I4vQQ7kNvwHumpVf&_nc_oc=AdnZpkNDaeZVcqftybYUSET4IURgn5Beceij7tez8cztlUv-dFt6iG2v-wuZacP3tFk&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=3YUAKr_wlxkKQAQUWQHG9w&oh=00_AfQx6-f9BGIMlTAw2rpuxXrD3e0-vl2UHw4vYb5nq7xesQ&oe=6875201C",
    status: "Bạn: Điên à ",
    id: "thao",
  },
  {
    name: "Minh Trang",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/515513239_1261396178877898_4407538885049899437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFrPNv7cDY-iEvfF30ZMk9VdwwGPziKz4Z3DAY_OIrPhkaqE-Sq7cMYpDIJ16SNlQEnPn1YJF7vxzaigx7YUOGp&_nc_ohc=eQAnvXQdFXUQ7kNvwGrzkQs&_nc_oc=Adml2wuabp66OWOTi79PoYm2RRPqwkhkFUX-Bz_xaYWStVxE3Es4GWUNLqDZZuLYT-I&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=-btM9ikxYHGlOhYdd0hyUA&oh=00_AfTLthuI57i_sMj-iKyn8bBrKUwksvLqsOQfYANGfkdp4A&oe=687520C3",
    status: "Bạn: bố sợ rồi ấy",
    id: "trang",
    unread: 20,
  },
  {
    name: "Tramm Lii",
    avatar:
      "https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/514485773_1268349757987600_6340945869679277649_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtwec1S_pfwX2yCaG7ob41Ue2VdKalzXxR7ZV0pqXNfD9LqPMRiPkWDA4FHfUX5ZHAHRHRkWYgwxRJ4HskdySx&_nc_ohc=yFHRJoglqhYQ7kNvwGggoTs&_nc_oc=AdnYRTmqz2Im_HR4KNsUaor6xogwRj29adiOOMVtKDEecHdnmgPouezv8RCH-LOOZ_8&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_gid=TOpE1zsfRtRWpKGE_JBxZw&oh=00_AfR1zUudNIDztaj0mQoZzCMfVK4X_EFVtfiNSxuFBDK_-A&oe=68752D77",
    status: "Hoạt động 4 phút trước",
    id: "tramm",
    unread: 1,
  },
  {
    name: "nhỏ xíu",
    avatar:
      "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/517840574_1281468883393817_5335313868730878055_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=bd9a62&_nc_eui2=AeFFrQe73v8RlxgXdvl_mutx7g8l4_GqyqPuDyXj8arKoyCImmxn3kCX3oKBDwSME6UpY0ASVmqDAxG7YHPPbIp1&_nc_ohc=5Q0vR2mxRXMQ7kNvwEj73Pu&_nc_oc=AdmqlCTkbA4YozDUilNzxhoOu6__wFTGAeQL6Qe0raJrF2kzTPFnaTOw2PuMdyS95Nc&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=MtpQpVdqSuKMfZ6qPMRp5g&oh=00_AfTOzua_1vvU0g3sSiK-YAd2Tl4TrMAc5CEG-XEAEn-mUw&oe=68754217",
    status: "Hoạt động 47 phút trước",
    id: "nhoxiu",
  },
  {
    name: "Thanh Thảo",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/517617840_1463474628142197_5621266106169249542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG49KFipnIt5-xuWcczIkEGTt1W_nUKSQJO3Vb-dQpJApmKGYok3xk_xDg_L_bVh8rT2S5gJmSpm4L58Uwr0IAU&_nc_ohc=pFY6LA2I4vQQ7kNvwHumpVf&_nc_oc=AdnZpkNDaeZVcqftybYUSET4IURgn5Beceij7tez8cztlUv-dFt6iG2v-wuZacP3tFk&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=3YUAKr_wlxkKQAQUWQHG9w&oh=00_AfQx6-f9BGIMlTAw2rpuxXrD3e0-vl2UHw4vYb5nq7xesQ&oe=6875201C",
    status: "Bạn: Điên à ",
    id: "thao",
  },
  {
    name: "Minh Trang",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/515513239_1261396178877898_4407538885049899437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFrPNv7cDY-iEvfF30ZMk9VdwwGPziKz4Z3DAY_OIrPhkaqE-Sq7cMYpDIJ16SNlQEnPn1YJF7vxzaigx7YUOGp&_nc_ohc=eQAnvXQdFXUQ7kNvwGrzkQs&_nc_oc=Adml2wuabp66OWOTi79PoYm2RRPqwkhkFUX-Bz_xaYWStVxE3Es4GWUNLqDZZuLYT-I&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=-btM9ikxYHGlOhYdd0hyUA&oh=00_AfTLthuI57i_sMj-iKyn8bBrKUwksvLqsOQfYANGfkdp4A&oe=687520C3",
    status: "Bạn: bố sợ rồi ấy",
    id: "trang",
  },
  {
    name: "Tramm Lii",
    avatar:
      "https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/514485773_1268349757987600_6340945869679277649_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtwec1S_pfwX2yCaG7ob41Ue2VdKalzXxR7ZV0pqXNfD9LqPMRiPkWDA4FHfUX5ZHAHRHRkWYgwxRJ4HskdySx&_nc_ohc=yFHRJoglqhYQ7kNvwGggoTs&_nc_oc=AdnYRTmqz2Im_HR4KNsUaor6xogwRj29adiOOMVtKDEecHdnmgPouezv8RCH-LOOZ_8&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_gid=TOpE1zsfRtRWpKGE_JBxZw&oh=00_AfR1zUudNIDztaj0mQoZzCMfVK4X_EFVtfiNSxuFBDK_-A&oe=68752D77",
    status: "Hoạt động 4 phút trước",
    id: "tramm",
  },
  {
    name: "nhỏ xíu",
    avatar:
      "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/517840574_1281468883393817_5335313868730878055_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=bd9a62&_nc_eui2=AeFFrQe73v8RlxgXdvl_mutx7g8l4_GqyqPuDyXj8arKoyCImmxn3kCX3oKBDwSME6UpY0ASVmqDAxG7YHPPbIp1&_nc_ohc=5Q0vR2mxRXMQ7kNvwEj73Pu&_nc_oc=AdmqlCTkbA4YozDUilNzxhoOu6__wFTGAeQL6Qe0raJrF2kzTPFnaTOw2PuMdyS95Nc&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=MtpQpVdqSuKMfZ6qPMRp5g&oh=00_AfTOzua_1vvU0g3sSiK-YAd2Tl4TrMAc5CEG-XEAEn-mUw&oe=68754217",
    status: "Hoạt động 47 phút trước",
    id: "nhoxiu",
  },
  {
    name: "Thanh Thảo",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/517617840_1463474628142197_5621266106169249542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG49KFipnIt5-xuWcczIkEGTt1W_nUKSQJO3Vb-dQpJApmKGYok3xk_xDg_L_bVh8rT2S5gJmSpm4L58Uwr0IAU&_nc_ohc=pFY6LA2I4vQQ7kNvwHumpVf&_nc_oc=AdnZpkNDaeZVcqftybYUSET4IURgn5Beceij7tez8cztlUv-dFt6iG2v-wuZacP3tFk&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=3YUAKr_wlxkKQAQUWQHG9w&oh=00_AfQx6-f9BGIMlTAw2rpuxXrD3e0-vl2UHw4vYb5nq7xesQ&oe=6875201C",
    status: "Bạn: Điên à ",
    id: "thao",
  },
  {
    name: "Minh Trang",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/515513239_1261396178877898_4407538885049899437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFrPNv7cDY-iEvfF30ZMk9VdwwGPziKz4Z3DAY_OIrPhkaqE-Sq7cMYpDIJ16SNlQEnPn1YJF7vxzaigx7YUOGp&_nc_ohc=eQAnvXQdFXUQ7kNvwGrzkQs&_nc_oc=Adml2wuabp66OWOTi79PoYm2RRPqwkhkFUX-Bz_xaYWStVxE3Es4GWUNLqDZZuLYT-I&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=-btM9ikxYHGlOhYdd0hyUA&oh=00_AfTLthuI57i_sMj-iKyn8bBrKUwksvLqsOQfYANGfkdp4A&oe=687520C3",
    status: "Bạn: bố sợ rồi ấy",
    id: "trang",
  },
  {
    name: "Tramm Lii",
    avatar:
      "https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/514485773_1268349757987600_6340945869679277649_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtwec1S_pfwX2yCaG7ob41Ue2VdKalzXxR7ZV0pqXNfD9LqPMRiPkWDA4FHfUX5ZHAHRHRkWYgwxRJ4HskdySx&_nc_ohc=yFHRJoglqhYQ7kNvwGggoTs&_nc_oc=AdnYRTmqz2Im_HR4KNsUaor6xogwRj29adiOOMVtKDEecHdnmgPouezv8RCH-LOOZ_8&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_gid=TOpE1zsfRtRWpKGE_JBxZw&oh=00_AfR1zUudNIDztaj0mQoZzCMfVK4X_EFVtfiNSxuFBDK_-A&oe=68752D77",
    status: "Hoạt động 4 phút trước",
    id: "tramm",
  },
  {
    name: "nhỏ xíu",
    avatar:
      "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/517840574_1281468883393817_5335313868730878055_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=bd9a62&_nc_eui2=AeFFrQe73v8RlxgXdvl_mutx7g8l4_GqyqPuDyXj8arKoyCImmxn3kCX3oKBDwSME6UpY0ASVmqDAxG7YHPPbIp1&_nc_ohc=5Q0vR2mxRXMQ7kNvwEj73Pu&_nc_oc=AdmqlCTkbA4YozDUilNzxhoOu6__wFTGAeQL6Qe0raJrF2kzTPFnaTOw2PuMdyS95Nc&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=MtpQpVdqSuKMfZ6qPMRp5g&oh=00_AfTOzua_1vvU0g3sSiK-YAd2Tl4TrMAc5CEG-XEAEn-mUw&oe=68754217",
    status: "Hoạt động 47 phút trước",
    id: "nhoxiu",
  },
  {
    name: "Thanh Thảo",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/517617840_1463474628142197_5621266106169249542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG49KFipnIt5-xuWcczIkEGTt1W_nUKSQJO3Vb-dQpJApmKGYok3xk_xDg_L_bVh8rT2S5gJmSpm4L58Uwr0IAU&_nc_ohc=pFY6LA2I4vQQ7kNvwHumpVf&_nc_oc=AdnZpkNDaeZVcqftybYUSET4IURgn5Beceij7tez8cztlUv-dFt6iG2v-wuZacP3tFk&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=3YUAKr_wlxkKQAQUWQHG9w&oh=00_AfQx6-f9BGIMlTAw2rpuxXrD3e0-vl2UHw4vYb5nq7xesQ&oe=6875201C",
    status: "Bạn: Điên à ",
    id: "thao",
  },
  {
    name: "Minh Trang",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/515513239_1261396178877898_4407538885049899437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFrPNv7cDY-iEvfF30ZMk9VdwwGPziKz4Z3DAY_OIrPhkaqE-Sq7cMYpDIJ16SNlQEnPn1YJF7vxzaigx7YUOGp&_nc_ohc=eQAnvXQdFXUQ7kNvwGrzkQs&_nc_oc=Adml2wuabp66OWOTi79PoYm2RRPqwkhkFUX-Bz_xaYWStVxE3Es4GWUNLqDZZuLYT-I&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=-btM9ikxYHGlOhYdd0hyUA&oh=00_AfTLthuI57i_sMj-iKyn8bBrKUwksvLqsOQfYANGfkdp4A&oe=687520C3",
    status: "Bạn: bố sợ rồi ấy",
    id: "trang",
  },
  {
    name: "Tramm Lii",
    avatar:
      "https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/514485773_1268349757987600_6340945869679277649_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtwec1S_pfwX2yCaG7ob41Ue2VdKalzXxR7ZV0pqXNfD9LqPMRiPkWDA4FHfUX5ZHAHRHRkWYgwxRJ4HskdySx&_nc_ohc=yFHRJoglqhYQ7kNvwGggoTs&_nc_oc=AdnYRTmqz2Im_HR4KNsUaor6xogwRj29adiOOMVtKDEecHdnmgPouezv8RCH-LOOZ_8&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_gid=TOpE1zsfRtRWpKGE_JBxZw&oh=00_AfR1zUudNIDztaj0mQoZzCMfVK4X_EFVtfiNSxuFBDK_-A&oe=68752D77",
    status: "Hoạt động 4 phút trước",
    id: "tramm",
  },
  {
    name: "nhỏ xíu",
    avatar:
      "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/517840574_1281468883393817_5335313868730878055_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=bd9a62&_nc_eui2=AeFFrQe73v8RlxgXdvl_mutx7g8l4_GqyqPuDyXj8arKoyCImmxn3kCX3oKBDwSME6UpY0ASVmqDAxG7YHPPbIp1&_nc_ohc=5Q0vR2mxRXMQ7kNvwEj73Pu&_nc_oc=AdmqlCTkbA4YozDUilNzxhoOu6__wFTGAeQL6Qe0raJrF2kzTPFnaTOw2PuMdyS95Nc&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=MtpQpVdqSuKMfZ6qPMRp5g&oh=00_AfTOzua_1vvU0g3sSiK-YAd2Tl4TrMAc5CEG-XEAEn-mUw&oe=68754217",
    status: "Hoạt động 47 phút trước",
    id: "nhoxiu",
  },
  {
    name: "Thanh Thảo",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/517617840_1463474628142197_5621266106169249542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG49KFipnIt5-xuWcczIkEGTt1W_nUKSQJO3Vb-dQpJApmKGYok3xk_xDg_L_bVh8rT2S5gJmSpm4L58Uwr0IAU&_nc_ohc=pFY6LA2I4vQQ7kNvwHumpVf&_nc_oc=AdnZpkNDaeZVcqftybYUSET4IURgn5Beceij7tez8cztlUv-dFt6iG2v-wuZacP3tFk&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=3YUAKr_wlxkKQAQUWQHG9w&oh=00_AfQx6-f9BGIMlTAw2rpuxXrD3e0-vl2UHw4vYb5nq7xesQ&oe=6875201C",
    status: "Bạn: Điên à ",
    id: "thao",
  },
  {
    name: "Minh Trang",
    avatar:
      "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/515513239_1261396178877898_4407538885049899437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFrPNv7cDY-iEvfF30ZMk9VdwwGPziKz4Z3DAY_OIrPhkaqE-Sq7cMYpDIJ16SNlQEnPn1YJF7vxzaigx7YUOGp&_nc_ohc=eQAnvXQdFXUQ7kNvwGrzkQs&_nc_oc=Adml2wuabp66OWOTi79PoYm2RRPqwkhkFUX-Bz_xaYWStVxE3Es4GWUNLqDZZuLYT-I&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=-btM9ikxYHGlOhYdd0hyUA&oh=00_AfTLthuI57i_sMj-iKyn8bBrKUwksvLqsOQfYANGfkdp4A&oe=687520C3",
    status: "Bạn: bố sợ rồi ấy",
    id: "trang",
  },
  {
    name: "Tramm Lii",
    avatar:
      "https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/514485773_1268349757987600_6340945869679277649_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtwec1S_pfwX2yCaG7ob41Ue2VdKalzXxR7ZV0pqXNfD9LqPMRiPkWDA4FHfUX5ZHAHRHRkWYgwxRJ4HskdySx&_nc_ohc=yFHRJoglqhYQ7kNvwGggoTs&_nc_oc=AdnYRTmqz2Im_HR4KNsUaor6xogwRj29adiOOMVtKDEecHdnmgPouezv8RCH-LOOZ_8&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_gid=TOpE1zsfRtRWpKGE_JBxZw&oh=00_AfR1zUudNIDztaj0mQoZzCMfVK4X_EFVtfiNSxuFBDK_-A&oe=68752D77",
    status: "Hoạt động 4 phút trước",
    id: "tramm",
  },
  {
    name: "nhỏ xíu",
    avatar:
      "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/517840574_1281468883393817_5335313868730878055_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=bd9a62&_nc_eui2=AeFFrQe73v8RlxgXdvl_mutx7g8l4_GqyqPuDyXj8arKoyCImmxn3kCX3oKBDwSME6UpY0ASVmqDAxG7YHPPbIp1&_nc_ohc=5Q0vR2mxRXMQ7kNvwEj73Pu&_nc_oc=AdmqlCTkbA4YozDUilNzxhoOu6__wFTGAeQL6Qe0raJrF2kzTPFnaTOw2PuMdyS95Nc&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=MtpQpVdqSuKMfZ6qPMRp5g&oh=00_AfTOzua_1vvU0g3sSiK-YAd2Tl4TrMAc5CEG-XEAEn-mUw&oe=68754217",
    status: "Hoạt động 47 phút trước",
    id: "nhoxiu",
  },
];

const messages = [
  {
    text: "Mày im mẹ mồm đi, nói chuyện với mày tao tụt hết cảm xúc",
    from: "left",
  },
  { text: "Ờ", from: "right" },
  {
    text: "Tử tế cái đéo gì? Mặt mày mà còn dám nói chuyện tử tế?",
    from: "left",
  },
  { text: "Ừ thì nói tiếp đi", from: "right" },
  {
    text: "Tao nói là mày ngu, chứ không phải kiểu ngu vừa đâu. Ngu mà còn hay tỏ ra nguy hiểm",
    from: "left",
  },
  {
    text: "Cái mặt mày nhìn như bản concept chưa hoàn thiện của tạo hóa ấy",
    from: "left",
  },
  {
    text: "Mày đi đâu người ta cũng tưởng mày cosplay cục tức của xã hội",
    from: "left",
  },
  { text: "Cạn lời thật", from: "right" },
  {
    text: "Tao mà làm bộ lọc rác thì mày bị chặn ngay từ vòng gửi xe. Nghe mày nói thôi là IQ tụt dốc không phanh",
    from: "left",
  },
  {
    text: "Mày nên được đem ra triển lãm giáo dục để cảnh tỉnh thế hệ sau",
    from: "left",
  },
  {
    text: "Mỗi lần mày nói chuyện là như mở tutorial 'cách không nên sống'. Đỉnh cao luôn",
    from: "left",
  },
  {
    text: "Thật sự, có những lúc tao nghĩ, mày tồn tại chỉ để thử thách lòng kiên nhẫn của nhân loại",
    from: "left",
  },
  { text: "Ghê đấy", from: "right" },
  {
    text: "Mày đừng có tưởng tao không block mày là tao quý mày. Là vì tao thích quan sát thảm họa thôi",
    from: "left",
  },
  {
    text: "Tao mà là lỗi hệ thống thì mày là bản vá lỗi không bao giờ cập nhật nổi",
    from: "left",
  },
  { text: "Ok, mày win", from: "right" },
];

function App() {
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  return (
    <div className="chat-live-admin-manage-app-wrapper">
      <main className="chat-live-admin-manage-main-content">
        <div
          className={`chat-live-admin-manage-chat-layout${
            showDetailPanel ? " chat-live-admin-manage-has-detail-panel" : ""
          }`}
        >
          <div className="chat-live-admin-manage-chat-list">
            <header className="chat-live-admin-manage-header">
              <div className="chat-live-admin-manage-header-title chat-live-admin-manage-pointer">
                <span className="fw-bold mb-2">tungthuyfake</span>
                <span className="chat-live-admin-manage-arrow-icon">
                  <IoIosArrowDown />
                </span>
              </div>
            </header>
            <div className="chat-live-admin-manage-box-search">
              <IoSearchOutline />
              <input
                className="chat-live-admin-manage-search-input"
                type="text"
                placeholder="Tìm kiếm"
              />
            </div>
            <div className="chat-live-admin-manage-chat-list-title mb-1">
              Tin nhắn
            </div>
            <div className="chat-live-admin-manage-chat-list-items">
              {chatList.map((chat, idx) => (
                <div
                  className={`chat-live-admin-manage-chat-item${
                    idx === 0 ? " active" : ""
                  }`}
                  key={chat.id}
                >
                  <div className="chat-live-admin-manage-chat-item-inner">
                    <img src={chat.avatar} alt="avatar" />
                    <div>
                      <div className="chat-live-admin-manage-chat-list-name">
                        {chat.name}
                      </div>
                      <div className="chat-live-admin-manage-chat-list-status">
                        {chat.status}
                      </div>
                    </div>
                  </div>
                  {chat.unread > 0 && (
                    <span className="chat-live-admin-manage-unread-badge">
                      {chat.unread > 99 ? "99+" : chat.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Chat Box */}
          <div className="chat-live-admin-manage-chat-box">
            <div className="chat-live-admin-manage-chat-box-header">
              <img src={chatList[0].avatar} alt="avatar" />
              <div>
                <div className="chat-live-admin-manage-chat-box-name">
                  {chatList[0].name}
                </div>
                <div className="chat-live-admin-manage-chat-box-status">
                  @dthaor__
                </div>
              </div>
              <div
                className="chat-live-admin-manage-chat-box-actions ms-auto chat-live-admin-manage-pointer"
                onClick={() => setShowDetailPanel((prev) => !prev)}
              >
                {showDetailPanel ? (
                  <AiFillInfoCircle />
                ) : (
                  <AiOutlineInfoCircle />
                )}
              </div>
            </div>
            <div className="chat-live-admin-manage-chat-messages">
              {(() => {
                const result = [];
                let i = 0;
                while (i < messages.length) {
                  if (messages[i].from === "left") {
                    // Start a group
                    const group = [];
                    let j = i;
                    while (j < messages.length && messages[j].from === "left") {
                      group.push(messages[j].text);
                      j++;
                    }
                    result.push(
                      <div
                        key={i}
                        className="chat-live-admin-manage-message-group"
                      >
                        <img
                          src={chatList[0].avatar}
                          alt="avatar"
                          className="chat-live-admin-manage-message-avatar"
                        />
                        <div className="chat-live-admin-manage-message-group-inner">
                          {group.map((text, k) => (
                            <div
                              className="chat-live-admin-manage-message left"
                              key={k}
                            >
                              {text}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                    i = j;
                  } else {
                    result.push(
                      <div
                        className="chat-live-admin-manage-message right"
                        key={i}
                      >
                        {messages[i].text}
                      </div>
                    );
                    i++;
                  }
                }
                return result;
              })()}
            </div>
            <div className="chat-live-admin-manage-chat-input">
              <input type="text" placeholder="Nhắn tin..." />
              <label
                htmlFor="file-upload"
                className="chat-live-admin-manage-pointer chat-live-admin-manage-no-margin-bottom"
              >
                <HiOutlinePaperClip className="chat-live-admin-manage-clip-icon" />
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".jpg,.jpeg,.png"
                style={{ display: "none" }}
              />
              <button>
                <LuSend />
              </button>
            </div>
          </div>
          {/* Detail Panel */}
          {showDetailPanel && (
            <div className="chat-live-admin-manage-detail-panel">
              <button
                className="chat-live-admin-manage-detail-close-btn"
                onClick={() => setShowDetailPanel(false)}
                aria-label="Đóng"
              ></button>
              <div className="chat-live-admin-manage-detail-header">
                <img
                  src={chatList[0].avatar}
                  alt="avatar"
                  className="chat-live-admin-manage-detail-avatar"
                />
                <div className="chat-live-admin-manage-detail-name">
                  {chatList[0].name}
                </div>
                <div className="chat-live-admin-manage-detail-username">
                  dthaor__
                </div>
              </div>
              <hr className="chat-live-admin-manage-detail-divider" />
              <div className="chat-live-admin-manage-detail-member-title">
                Thành viên
              </div>
              <div className="chat-live-admin-manage-detail-member">
                <img
                  src={chatList[0].avatar}
                  alt="avatar"
                  className="chat-live-admin-manage-detail-member-avatar"
                />
                <div>
                  <div className="chat-live-admin-manage-detail-member-name">
                    {chatList[0].name}
                  </div>
                  <div className="chat-live-admin-manage-detail-member-username">
                    dthaor__
                  </div>
                </div>
              </div>
              <div className="chat-live-admin-manage-detail-actions">
                <button className="chat-live-admin-manage-detail-block-btn">
                  Chặn
                </button>
                <button className="chat-live-admin-manage-detail-delete-btn">
                  Xóa đoạn chat
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
