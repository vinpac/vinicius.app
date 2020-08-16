import React from 'react'
import cx from 'classnames'
import { ProjectCompactDetailsButton } from 'components/ProjectCompactDetailsButton'
import { useTailwindCx } from 'lib/theme'

export interface LastProjectsSectionProps {
  readonly className?: string
}

const LastProjectsSection: React.FC<LastProjectsSectionProps> = ({
  className,
}) => {
  const tcx = useTailwindCx('gray')
  return (
    <div className={cx('component relative', className)}>
      <div className="container pt-16 relative z-10 max-w-4xl">
        <div className="relative z-30">
          <h2
            className={`text-4xl font-bold mb-4 text-center ${tcx(
              'text',
              900,
            )}`}
          >
            O que eu fiz até hoje
          </h2>
        </div>
        <ProjectCompactDetailsButton
          name="Atados"
          description="Uma plataforma que conecta voluntários com ONGs"
          href="https://www.atados.com.br"
          logoSrc="/assets/Project/Logo/Atados.png"
          className="mb-6"
          active
        />
        <ProjectCompactDetailsButton
          name="Minhas Finanças"
          description="Lorem Ipsum dolor iset"
          href="https://www.atados.com.br"
          logoSrc="/assets/Project/Logo/Atados.png"
          className="mb-6"
        />
        <ProjectCompactDetailsButton
          name="Minhas Finanças"
          description="Lorem Ipsum dolor iset"
          href="https://www.atados.com.br"
          logoSrc="/assets/Project/Logo/Atados.png"
          className="mb-6"
        />
      </div>
      <style jsx>{`
        .component {
          min-height: 800px;
        }
      `}</style>
    </div>
  )
}

LastProjectsSection.displayName = 'LastProjectsSection'

export { LastProjectsSection }
export default LastProjectsSection
