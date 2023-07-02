import PageComponent from "../components/PageComponent";
import SurveysListItem from "../components/SurveysListItem";
import { useStateContext } from "../contexts/ContextProvider";

export default function Surveys() {
    const { surveys } = useStateContext();
    const onDeleteClick = () => {
        console.log("onclick deleted");
    };
    return (
        <PageComponent title="Surveys">
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
