import { Answer } from '../entities/answer'

interface Input {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({instructorId, questionId, content}:Input) {
    const answer = new Answer(content, instructorId, questionId)
    return answer
  }
}