import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Las bases de datos son sistemas organizados para almacenar y gestionar grandes cantidades de información de manera estructurada. Facilitan el acceso, manipulación y consulta de datos, esenciales para diversas aplicaciones como la gestión de clientes o el comercio electrónico.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cada base de datos se organiza en tablas, donde cada tabla contiene columnas que representan atributos específicos de una entidad. Esto permite realizar consultas complejas y obtener información relevante de manera eficiente.
      </>
    ),
  },
  {
    title: 'Powered by sql',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Con el avance tecnológico, las bases de datos han evolucionado para incluir modelos más flexibles, como bases de datos en la nube y NoSQL, que se adaptan a grandes volúmenes de datos y diversas necesidades de información.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
