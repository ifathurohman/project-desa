import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { SDGGoal, SDGApiResponse } from '../types/types';
import SDGTargetChart from '../components/SDGTargetChart';
import SDGRecommendationTable from '../components/SDGRecommendationTable';

interface SDGDetailModalProps {
    goal: SDGGoal | null;
    onClose: () => void;
    targetData: SDGApiResponse | null;
    loading: boolean;
    error: string | null;
}

const SDGDetailModal: React.FC<SDGDetailModalProps> = ({ goal, onClose, targetData, loading, error }) => {
    if (!goal) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" onClick={onClose}>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center gap-2">
                                    <goal.icon className="w-6 h-6" style={{ color: goal.color }} />
                                    <span>Goal {goal.id}: {goal.title}</span>
                                </h3>

                                <div className="mt-4">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-700">Score</span>
                                            <span className="text-sm font-semibold">{goal.score}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-primary-600 h-2 rounded-full"
                                                style={{ width: `${goal.score}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Achievements</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                                                {goal.achievements.map((achievement, index) => (
                                                    <li key={index}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Challenges</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                                                {goal.challenges.map((challenge, index) => (
                                                    <li key={index}>{challenge}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {loading && (
                                            <div className="text-center py-4">
                                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
                                                <p className="mt-2 text-sm text-gray-500">Loading target data...</p>
                                            </div>
                                        )}

                                        {error && (
                                            <div className="text-center py-4">
                                                <AlertTriangle className="h-8 w-8 text-red-500 mx-auto" />
                                                <p className="mt-2 text-sm text-red-500">{error}</p>
                                            </div>
                                        )}

                                        {targetData && targetData.target && targetData.target.length > 0 && (
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Target Details</h4>
                                                {targetData.target.map((target, index) => (
                                                    <div key={index} className="border-t pt-4">
                                                        <p className="text-sm font-medium text-gray-900 mb-2">
                                                            {target.kdind}: {target.deskripsi}
                                                        </p>
                                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                                            <div>
                                                                <p className="text-gray-600">Nilai Awal: {target.nilaiawal}</p>
                                                                <p className="text-gray-600">Volume: {target.volume} {target.satuan}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-gray-600">Biaya: {target.prakiraanbiaya}</p>
                                                                <p className="text-gray-600">Sumber: {target.sumber}</p>
                                                            </div>
                                                        </div>
                                                        
                                                        {target.yearable && targetData.header && (
                                                            <SDGTargetChart
                                                                yearable={target.yearable}
                                                                header={targetData.header}
                                                                title={`Progress Timeline - ${target.kdind}`}
                                                            />
                                                        )}
                                                        
                                                    </div>
                                                ))}
                                                
                                                {targetData.recom && targetData.recom.map((rec, index) => (
                                                    <SDGRecommendationTable
                                                        key={index}
                                                        recommendation={rec}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SDGDetailModal;