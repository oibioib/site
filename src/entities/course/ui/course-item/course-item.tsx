import classNames from 'classnames/bind';
import type { Course } from '@/entities/course';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './course-item.module.scss';

const cx = classNames.bind(styles);

type addFields = {
  buttonText: string;
  iconSrc: string;
};

export type PropsType = Pick<Course, 'title' | 'language' | 'startDate' | 'detailsUrl'> & addFields;

export const CourseItem = ({
  title,
  language,
  startDate,
  detailsUrl,
  buttonText,
  iconSrc,
}: PropsType) => {
  return (
    <section className={cx('course-item')}>
      <figure className={cx('icon-container')}>
        <Image className={cx('course-icon')} src={iconSrc} alt={title} data-testid="course-image" />
      </figure>
      <article className={cx('course-info')}>
        <Subtitle color="black" fontSize="extra-small">
          {title}
        </Subtitle>
        <span className={cx('date')}>{`${startDate} • ${language[0].toUpperCase()}`}</span>
      </article>
      <LinkCustom
        className={cx('details-link')}
        href={detailsUrl}
        variant="rounded"
        aria-label="More details"
        data-testid="course-link"
      >
        {buttonText}
      </LinkCustom>
    </section>
  );
};
