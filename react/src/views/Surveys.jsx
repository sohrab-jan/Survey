import PageComponent from "../components/PageComponent";
import SurveysListItem from "../components/SurveysListItem";
import TButton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

export default function Surveys() {
    const { surveys } = useStateContext();
    const onDeleteClick = () => {
        console.log("onclick deleted");
    };
    return (
        <PageComponent
            title="Surveys"
            buttons={
                <TButton color="green" to="/surveys/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create New
                </TButton>
            }
        >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map((survey) => (
                    <SurveysListItem
                        survey={survey}
                        key={survey.id}
                        onDeleteClick={onDeleteClick}
                    />
                ))}
            </div>
        </PageComponent>
    );
}
