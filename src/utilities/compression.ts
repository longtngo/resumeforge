import JsonURL from '@jsonurl/jsonurl';
import JSONCrush from 'jsoncrush';

export const compress = (input: unknown): Promise<string> => {
  return new Promise((resolve) => {
    resolve(
      encodeURIComponent(
        JSONCrush.crush(JsonURL.stringify(input) as string) || ''
      )
    );
  });
};

export const decompress = async (input: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JsonURL.parse(JSONCrush.uncrush(decodeURIComponent(input))));
    } catch (e) {
      reject(e);
    }
  });
};
