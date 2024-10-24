import React, { useState } from 'react';
import '../../assets/styles/DisorderTags.css';
import SectionTitle from '../sharedComponents/SectionTitle';

const DisorderTags = () => {
    const [tooltip, setTooltip] = useState({ visible: false, description: '', position: { x: 0, y: 0 } });

    const handleMouseEnter = (e, description) => {
        const { clientX: x, clientY: y } = e;
        setTooltip({ visible: true, description, position: { x, y } });
    };

    const handleMouseLeave = () => {
        setTooltip({ visible: false, description: '', position: { x: 0, y: 0 } });
    };

    const anxietyDisorders = [
        { type: 'image', src: "https://www.mpowerminds.com/assetOLD/images/seek-help.jpg", alt: 'Image 1' },
        { type: 'text', label: 'Generalized Anxiety Disorder', description: 'Chronic anxiety, exaggerated worry, and tension.' },
        { type: 'text', label: 'Panic Disorder', description: 'Sudden and repeated episodes of intense fear.' },
        { type: 'image', src: "https://i.redd.it/1h8ul114yxwb1.jpg", alt: 'Image 2' },
        { type: 'text', label: 'Social Anxiety Disorder', description: 'Fear of social situations and being judged.' },
        { type: 'text', label: 'Obsessive-Compulsive Disorder (OCD)', description: 'Recurrent, unwanted thoughts (obsessions) and/or repetitive behaviors (compulsions).' },
        { type: 'image', src: "https://www.shutterstock.com/image-vector/seasonal-affective-disorder-set-lack-260nw-2287227563.jpg", alt: 'Image 3' },
        { type: 'text', label: 'Post-Traumatic Stress Disorder (PTSD)', description: 'Triggered by experiencing or witnessing a terrifying event.' },
        { type: 'text', label: 'Agoraphobia', description: 'Fear of places or situations that might cause panic.' },
    ];

    const moodDisorders = [
        { type: 'text', label: 'Major Depressive Disorder', description: 'Persistent feelings of sadness and loss of interest.' },
        { type: 'image', src: "https://chrysalisketamine.com/wp-content/uploads/2023/04/what-causes-bipolar-disorder.jpg", alt: 'Image 4' },
        { type: 'text', label: 'Bipolar Disorder', description: 'Extreme mood swings, including emotional highs (mania) and lows (depression).' },
        { type: 'text', label: 'Dysthymia', description: 'A continuous long-term (chronic) form of depression.' },
        { type: 'image', src: "https://www.royalspanishcenter.com/wp-content/uploads/2024/04/Causes-of-Red-Eye-and-Its-Treatment.jpg", alt: 'Image 5' },
        { type: 'text', label: 'Seasonal Affective Disorder', description: 'Depression related to changes in seasons.' },
        { type: 'text', label: 'Mood Disorder', description: 'A disturbance in a person’s mood.' },
        { type: 'image', src: "https://www.mindspacefoundation.co.uk/wp-content/uploads/2023/07/Add-a-heading-1024x682.png", alt: 'Image 6' },
    ];

    const personalityDisorders = [
        { type: 'text', label: 'Borderline Personality Disorder', description: 'An instability in moods, behavior, and relationships.' },
        { type: 'image', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfDYdET5e961UppYVjYn3Gq4pPx6wGVgdWw&s", alt: 'Image 7' },
        { type: 'text', label: 'Narcissistic Personality Disorder', description: 'A pattern of need for admiration and lack of empathy for others.' },
        { type: 'text', label: 'Histrionic Personality Disorder', description: 'A pattern of excessive attention-seeking behaviors.' },
        { type: 'image', src: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/10482/images/zXrj9GBhQiScTfKgpuWf_hand-792920_1920.jpg", alt: 'Image 8' },
        { type: 'text', label: 'Paranoid Personality Disorder', description: 'Distrust and suspicion of others without reason.' },
        { type: 'text', label: 'Avoidant Personality Disorder', description: 'Chronic feelings of inadequacy and fear of rejection.' },
    ];

    const repeatedAnxietyDisorders = [...anxietyDisorders, ...anxietyDisorders];
    const repeatedMoodDisorders = [...moodDisorders, ...moodDisorders];
    const repeatedPersonalityDisorders = [...personalityDisorders, ...personalityDisorders];

    return (
        <>
            <div className=" max-w-7xl mx-auto m-10 relative space-x-6 overflow-x-hidden" data-aos="fade-up" >
                <SectionTitle title={"Mental Health disorders"}></SectionTitle>
                <h1 className="text-[var(--grey--900)] mb-6 text-center" data-aos="fade-up" >
                    Monitor for early indicators of <br /> <span className="text-[var(--primary)] italic">hundrunds of disorders</span>
                </h1>
                <div className=" carousel-wrapper mt-8">
                    {/* Anxiety Disorders */}
                    <div className=" flex gap-12 p-4 justify-center items-center content-right-left w-fit">
                        {repeatedAnxietyDisorders.map((tag, index) =>
                            tag.type === 'text' ? (
                                <span
                                    key={`${tag.label}-${index}`}
                                    className="bg-[#fff] whitespace-nowrap text-2xl text-gray-700 font-medium border-2 border-gray-400 rounded-full px-3 py-3 text-center"
                                    onMouseEnter={(e) => handleMouseEnter(e, tag.description)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {tag.label}
                                </span>
                            ) : (
                                <div key={`${tag.src}-${index}`} className="w-96 h-16 rounded-full overflow-hidden object-cover " >
                                    <img
                                        src={tag.src}
                                        alt={tag.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        )}
                    </div>

                    {/* Mood Disorders */}
                    <div className="flex gap-12 p-4 justify-center items-center content-left-right w-fit">
                        {repeatedMoodDisorders.map((tag, index) =>
                            tag.type === 'text' ? (
                                <span
                                    key={`${tag.label}-${index}`}
                                    className="bg-[#fff] whitespace-nowrap text-2xl text-gray-700 font-medium border-2 border-gray-400 rounded-full px-3 py-3 text-center"
                                    onMouseEnter={(e) => handleMouseEnter(e, tag.description)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {tag.label}
                                </span>
                            ) : (
                                <div key={`${tag.src}-${index}`} className="w-96 h-16 rounded-full overflow-hidden">
                                    <img
                                        src={tag.src}
                                        alt={tag.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        )}
                    </div>

                    {/* Personality Disorders */}
                    <div className="flex gap-12 p-4 justify-center items-center content-right-left w-fit">
                        {repeatedPersonalityDisorders.map((tag, index) =>
                            tag.type === 'text' ? (
                                <span
                                    key={`${tag.label}-${index}`}
                                    className="bg-[#fff] whitespace-nowrap text-2xl text-gray-700 font-medium border-2 border-gray-400 rounded-full px-3 py-3 text-center"
                                    onMouseEnter={(e) => handleMouseEnter(e, tag.description)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {tag.label}
                                </span>
                            ) : (
                                <div key={`${tag.src}-${index}`} className="w-96 h-16 rounded-full overflow-hidden">
                                    <img
                                        src={tag.src}
                                        alt={tag.alt}
                                        className="w-full h-full object-cover "
                                    />
                                </div>
                            )
                        )}
                    </div>

                    {/* Tooltip */}
                    {tooltip.visible && (
                        <div
                            className="absolute bg-gray-800 text-white text-center text-sm rounded py-2 px-4 mt-2 items-center"
                            style={{
                                top: `40%`,
                                left: `35%`,
                            }}
                        >
                            {tooltip.description}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DisorderTags;
