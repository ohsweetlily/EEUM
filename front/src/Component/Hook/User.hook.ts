import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from "react-query";
import {
    createUserdata,
    loginUser,
    getLoginedUser,
    editUserdata,
    deleteUser,
    getMyCommunities
} from "../Api/User";


export const useJoinUser = () => {
    const { mutateAsync, isError } = useMutation(createUserdata);
    return {
        createUserdata: mutateAsync,
        isError,
    };
};

export const useLoginUser = () => {
    const { mutateAsync, isError, data } = useMutation(loginUser);
    return {
        loginUser: mutateAsync,
        isError,
        data,
    };
};

export const useGetLoginedUser = () => {
    const { data: LoginedUser, isError, ...rest } = useQuery(
        ["getLoginedUser"],
        () => {
            return getLoginedUser();
        },
        {
            retry: 0,
        }
    );

    return {
        LoginedUser,
        isLogined: !!LoginedUser,
        isError,
        ...rest,
    };
};

export const useDeleteUser = () => {
    const { mutateAsync, isError } = useMutation(deleteUser);

    return {
        deleteUser: mutateAsync,
        isError,
    };
};

export const useEditUser = () => {
    const { mutateAsync: editUserdataAsync, isError } = useMutation(editUserdata);

    return {
        editUserdata: editUserdataAsync,
      isError
    };
  };


  export const useGetMyCommunities = (page: number, elements: number, userId: number|undefined) => {
    const {data, ...rest} = useQuery(['getMyCommunities', page, elements, userId], () => {
      return getMyCommunities(page, elements, userId)
    },{
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
    );
    return {
      communityList: data?.data.items || [],
      totalPage: data?.data.totalPages || 0,
      ...rest,
    }
  };


  export const useRedirectLoginPage = () => {

    const navigate = useNavigate();
    const { isLogined, isFetched } = useGetLoginedUser();

    useEffect(() => {
        if (isFetched && !isLogined) {
            navigate("/Login");
        }
    }, [isLogined, isFetched]);
  }
