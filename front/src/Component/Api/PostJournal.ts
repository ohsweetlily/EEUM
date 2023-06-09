import axios, { AxiosRequestConfig } from "axios";
import { JournalRequest, JournalResponse } from "../../Types/JournalPost.type";
import { JournalListResponse } from "../../Types/GetJournal.type";
import { JournalDetailResponse } from "../../Types/GetJournalDetail.type";
import { JournalDeleteResponse } from "../../Types/DeleteJournal.type";

export const createJournal = async (body: JournalRequest) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.post<JournalResponse>(
        `http://kdt-ai6-team02.elicecoding.com/api/diaries`,
        body,
        config
    );
    return res;
};

export const getJournals = async (page: number, elements: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get<JournalListResponse>(
        `http://kdt-ai6-team02.elicecoding.com/api/diaries?page=${page}&elements=${elements}`,
        config
    );
    return res;
};

export const getJournalsDetail = async (id: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get<JournalDetailResponse>(
        `http://kdt-ai6-team02.elicecoding.com/api/diaries/detail/${id}`,
        config
    );
    return res;
};

export const getJournalDelete = async (id: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in localStorage");
    }
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.delete<JournalDeleteResponse>(
        `http://kdt-ai6-team02.elicecoding.com/api/diaries/${id}`, config
    );
    return res;
};
