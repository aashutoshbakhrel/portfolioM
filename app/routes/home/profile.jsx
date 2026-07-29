import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About Madhu" start={visible} delay={500} />
    </Heading>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Madhu Dahal is a dedicated <strong>Server Manager</strong> and a Computer
      Science student at Herald College. With a passion for technology and
      problem-solving, he combines technical knowledge with creativity to build,
      manage, and improve online communities.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Over the years, Madhu has served as an administrator and manager for
      multiple Minecraft communities, including <strong>Ruby SMP</strong>,
      where he earned a reputation for reliability, leadership, and maintaining
      engaging server experiences. His ability to organize teams, resolve
      challenges, and support players has made him a trusted leader in the
      Minecraft community.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      For the past <strong>four years</strong>, Madhu has been serving as a
      Server Manager at <strong>ES Corp</strong>. During this time, he has
      demonstrated consistency, responsibility, and a strong commitment to
      delivering high-quality server management. Beyond work, he enjoys
      programming, animation, illustration, and exploring new technologies,
      always striving to learn and grow.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />

              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Contact Madhu
              </Button>
            </div>

            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Madhu
                </div>
              </div>

              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Portrait of Madhu Dahal"
                />

                <svg
                  className={styles.svg}
                  data-visible={visible}
                  viewBox="0 0 136 766"
                >
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
