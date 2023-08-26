import { useEffect, useState } from 'react';
import PageComponent from '../components/PageComponent';
import axiosClient from '../axios';
import DashboardCard from '../components/DashboardCard';
import TButton from '../components/core/TButton';
import { EyeIcon, PencilIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        setLoading(true);
        axiosClient.get(`/dashboard`)
            .then((res) => {
                setLoading(false);
                setData(res.data);
                return res;
            }).catch((error) => {
                setLoading(false);
                return error;
            });
    }, []);

    return (
        <PageComponent title="Dashboard">
            {loading && <div className='flex justify-center'>Loading ...</div>}
            {!loading && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700'>
                    <DashboardCard
                        title="Total Surveys"
                        className="order-1 lg:order-2"
                        style={{ animationDelay: '0.1s' }}
                    >
                        <div className='text-8xl pb-4 font-semibold flex-1 flex items-center justify-center'>
                            {data.total_surveys}
                        </div>
                    </DashboardCard>

                    <DashboardCard
                        title="Total Answers"
                        className="order-2 lg:order-4"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className='text-8xl pb-4 font-semibold flex-1 flex items-center justify-center'>
                            {data.total_answers}
                        </div>
                    </DashboardCard>

                    <DashboardCard
                        title="Latest Survey"
                        className="order-3 lg:order-1 row-span-2"
                        style={{ animationDelay: '0.2s' }}
                    >
                        {data.latest_survey && (
                            <div>
                                <img src={data.latest_survey.image_url}
                                    className='w-[240px] mx-auto'
                                />
                                <h3 className='font-bold text-xl mb-3'>
                                    {data.latest_survey.title}
                                </h3>
                                <div className='flex justify-between text-sm mb-1'>
                                    <div>Create Date:</div>
                                    <div>{data.latest_survey.created_at}</div>
                                </div>
                                <div className='flex justify-between text-sm mb-1'>
                                    <div>Expire Date:</div>
                                    <div>{data.latest_survey.expire_date}</div>
                                </div>
                                <div className='flex justify-between text-sm mb-1'>
                                    <div>Status:</div>
                                    <div>{data.latest_survey.status ? "Active" : 'Draft'}</div>
                                </div>
                                <div className='flex justify-between text-sm mb-1'>
                                    <div>Questions:</div>
                                    <div>{data.latest_survey.questions_count}</div>
                                </div>
                                <div className='flex justify-between text-sm mb-3'>
                                    <div>Answers:</div>
                                    <div>{data.latest_survey.answer_count}</div>
                                </div>
                                <div className='flex justify-between'>
                                    <TButton to={`/surveys/${data.latest_survey.id}`} link>
                                        <PencilIcon className='w-5 h-5 mr-2' />
                                        Edit Survey
                                    </TButton>
                                    <TButton link>
                                        <EyeIcon className='w-5 h-5 mr-2' />
                                        View Answers
                                    </TButton>
                                </div>
                            </div>
                        )}
                        {!data.latest_survey && (
                            <div className='text-gray-600 text-center py-16'>
                                You don,t have surveys yet
                            </div>
                        )}
                    </DashboardCard>

                    <DashboardCard
                        title="Latest Answers"
                        className="order-4 lg:order-3 row-span-2"
                        style={{ animationDelay: '0.3s' }}
                    >
                        {data.latest_answer && data.latest_answer.length && (
                            < div className='text-left'>
                                {data.latest_answer.map((answer) => (
                                    <a href='#'
                                        key={answer.id}
                                        className="block p-2 hover:bg-gray-100/90">
                                        <div className='font-semibold'>{answer.survey.title}</div>
                                        <small>
                                            Answer Made at:
                                            <i className='font-semibold'>{answer.end_date}</i>
                                        </small>
                                    </a>
                                ))}
                                {!data.latest_answer.length && <div className='text-gray-600 text-center py-16'>
                                    You don't have answers yet
                                </div>}
                            </div>
                        )}
                    </DashboardCard>
                </div >
            )
            }
        </PageComponent >
    );
}
