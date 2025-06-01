import React from 'react';

interface Recommendation {
    no: string;
    name: string;
    score: string;
    recommendation: string;
    bnba: string;
    unit: string;
}

interface SDGRecommendationTableProps {
    recommendation: Recommendation;
}

const SDGRecommendationTable: React.FC<SDGRecommendationTableProps> = ({ recommendation }) => {
    return (
        <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-4">Recommendations</h4>
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                        <div className="bg-white px-4 py-3 border-b border-gray-200">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Indicator</p>
                                    <p className="mt-1 text-sm text-gray-900">{recommendation.no}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Score</p>
                                    <p className="mt-1 text-sm text-gray-900">{recommendation.score}%</p>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="px-4 py-4"
                            dangerouslySetInnerHTML={{ __html: recommendation.recommendation }}
                        />
                        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Target Population</p>
                                    <div 
                                        className="mt-1 text-sm text-gray-900"
                                        dangerouslySetInnerHTML={{ __html: recommendation.bnba }}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Unit</p>
                                    <p className="mt-1 text-sm text-gray-900">{recommendation.unit}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SDGRecommendationTable;