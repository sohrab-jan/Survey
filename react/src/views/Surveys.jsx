import { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import SurveysListItem from "../components/SurveysListItem";
import PaginationLinks from "../components/PaginationLinks";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";

export default function Surveys() {
    const [surveys, setSurvey] = useState([]);
    const [loading, setLoading] = useState(false);
    const [meta, setMeta] = useState({});
    const { showToast } = useStateContext();

    const onDeleteClick = (id) => {
        if (window.confirm('Are you sure you want to delete this survey?')) {
            axiosClient.delete(`surveys/${id}`)
                .then(() => {
                    getSurveys()
                    showToast('The survey was deleted');
                })
        }

    };

    const onPageClick = (link) => {
        getSurveys(link.url)
    }

    const getSurveys = (url) => {
        url = url || 'surveys';
        setLoading(true)

        axiosClient.get(url)
            .then(({ data }) => {
                setSurvey(data.data)
                setMeta(data.meta)
                setLoading(false);
            })
    }
    useEffect(() => {
        getSurveys();
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
                {surveys.length === 0 && <div className="py-8 text-center text-gray-700">You don't have any surveys</div>}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {surveys.map((survey) => (
                        <SurveysListItem
                            survey={survey}
                            key={survey.id}
                            onDeleteClick={onDeleteClick}
                        />
                    ))}
                </div>

                {surveys.length > 0 && <PaginationLinks meta={meta} onPageClick={onPageClick} />}
            </div>}
        </PageComponent>
    );
}
