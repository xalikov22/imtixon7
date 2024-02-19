import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useCount = create(
    devtools(
        persist(
            (set) => ({
                count: 0,
                increment: () =>
                    set((state) => ({
                        count: state.count + 1,
                    })),
                decrement: () =>
                    set((state) => ({
                        count: state.count - 1,
                    })),
            }), {
                name: 'count',
            }
        )
    )
);

export default useCount;