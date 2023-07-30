import { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import SurveysListItem from "../components/SurveysListItem";
import PaginationLinks from "../components/PaginationLinks";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import axiosClient from "../axios";

export default function Surveys() {
    const [surveys, setSurvey] = useState([]);
    const [loading, setLoading] = useState(false);
    const [meta, setMeta] = useState({});

    const onDeleteClick = () => {
        console.log("onclick deleted");
    };

    useEffect(() => {
        setLoading(true);
        axiosClient.get('/surveys')
            .then(({ data }) => {
                setSurvey(data.data)
                setMeta(data.meta)
                setLoading(false);
            })
    }, []);

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
            {loading && <div className="text-center text-lg">Loading ... </div>}
            {!loading && <div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {surveys.map((survey) => (
                        <SurveysListItem
                            survey={survey}
                            key={survey.id}
                            onDeleteClick={onDeleteClick}
                        />
                    ))}
                </div>

                <PaginationLinks meta={meta} />
            </div>}
        </PageComponent>
    );
}
