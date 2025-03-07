import { abi } from "@/constants/Talk.json";

export const wagmiContractConfig = {
  address: import.meta.env.VITE_CONTRACT_ADDRESS,
  abi: abi,
} as const;
