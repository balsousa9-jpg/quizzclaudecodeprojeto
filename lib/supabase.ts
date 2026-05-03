import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type QuizResult = {
  id?: string
  nickname: string
  score: number
  created_at?: string
}

export async function saveQuizResult(nickname: string, score: number) {
  const { data, error } = await supabase
    .from('quiz_results')
    .insert({ nickname, score })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getLeaderboard() {
  const { data, error } = await supabase
    .from('quiz_results')
    .select('nickname, score, created_at')
    .order('score', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(10)

  if (error) throw error
  return data
}
