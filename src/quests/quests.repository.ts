import { EntityRepository, Repository } from 'typeorm';
import { Quest } from './entities/quest.entity';
import { CreateQuestDto } from './dto/create-quest.dto';
import { Region } from './entities/region.entity';

@EntityRepository(Quest)
export class QuestsRepository extends Repository<Quest> {
  /* 퀘스트 생성 */
  async createAndSave({ lat, lng, type, region }: CreateQuestDto) {
    return await this.save({
      lat,
      lng,
      type,
      region,
    });
  }

  /* 전체 퀘스트 조회 */
  async findAll(region: Region, id?: number): Promise<Object[]> {
    const quests = await this.find({
      where: { region },
      relations: ['completes', 'completes.player'],
    });
    /* 플레이어의 완료여부(completed), 전체 완료 횟수(completes) 추가 */
    return quests.map((quest) => {
      const completed = !!quest.completes.find(
        ({ player }) => player.Id === id
      );
      return {
        ...quest,
        completed,
        completes: quest.completes.length,
      };
    });
  }

  /* 특정 퀘스트 조회 */
  async findOneBy(id: number): Promise<Quest> {
    return await this.findOne({ id });
  }
}