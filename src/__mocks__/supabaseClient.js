export const supabase = {
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
  }),
};

export default supabase;
