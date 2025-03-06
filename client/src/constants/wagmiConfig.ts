import { abi } from '@/constants/Talk.json';

export const wagmiContractConfig = {
    address: `0x${import.meta.env.CONTRACT_ADDRESS}`,
    abi: abi,
} as const;