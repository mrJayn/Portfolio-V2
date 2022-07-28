import Image from 'next/image'
import data from '@data'

const Skills = () => {
    return (
        <div className="skills">
            <p>Tech I&apos;ve worked with recently</p>
            <ul>
                {data.skills.map((i) => (
                    <li key={`skill-item-${i.item}`}>
                        <div>
                            <Image
                                className="skill-img"
                                src={i.url}
                                alt={`${i.skill}-image`}
                                layout="intrinsic"
                                height={15}
                                width={15}
                            />
                        </div>
                        <p>{i.skill}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Skills
