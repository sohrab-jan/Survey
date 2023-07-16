import { PlusIcon } from "@heroicons/react/24/outline";
import QuestionEditor from "./QuestionEditor";
import { useEffect, useState } from "react";

export default function SurveyQuestions({ survey, onSurveyUpdate }) {
    const [model, setModel] = useState({ ...survey });
    const addQuestion = () => {
        setModel({
            ...model,
            questions: [
                ...model.questions,
                {
                    id: uuidv4(),
                    type: "text",
                    questions: "",
                    description: "",
                    data: {},
                },
            ],
        });
    }
    const questionChange = (question) => {
        if (!question) return;
        const newQuestions = model.questions.map((q) => {
            if (q.id == question.id) {
                return { ...question };
            }
            return q;
        });
        setModel({
            ...model,
            questions: newQuestions
        });

    }
    const deleteQuestion = (question) => {
        const newQuestion = model.question.filter((q) => q.id !== question.id);
        setModel({
            ...model,
            questions: newQuestion
        });
    };

    useEffect(() => {
        onSurveyUpdate(model);
    }, [model]);

    return (
        <>
            <div className="flex justify-between">
                <h3 className="text-2x1 font-bold">Questions</h3>
                <button type="button" className="flex items-center text-sm py-1 rounded-sm text-white
                 bg-gray-600 hover:bg-gray700" onClick={addQuestion}>
                    <PlusIcon className="w-4 mr-2" />
                    Add Question
                </button>
            </div>
            {model.questions.length ? (
                model.questions.map((q, ind) => (
                    <QuestionEditor
                        key={q}
                        index={ind}
                        questions={q}
                        questionChange={questionChange}
                        addQuestion={addQuestion}
                        deleteQuestion={deleteQuestion}
                    />
                ))
            ) : (
                <div className="text-gray-400 text-center py-4">
                    You don't have any questions created
                </div>
            )}
        </>
    )
}
