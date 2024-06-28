# # Dart에 등록된 회사 리스트 xml -> json
# import xml.etree.ElementTree as ET
# import json

# def xml_to_json(xml_file):
#     tree = ET.parse(xml_file)
#     root = tree.getroot()

#     def parse_element(element):
#         parsed_data = {}
#         for child in element:
#             if len(child):
#                 parsed_data[child.tag] = parse_element(child)
#             else:
#                 parsed_data[child.tag] = child.text
#         return parsed_data

#     parsed_data = [parse_element(list_element) for list_element in root.findall('list')]
#     return json.dumps(parsed_data, ensure_ascii=False, indent=4)

# # XML 파일 경로
# xml_file = 'C:/Users/kangs/Projects/investimate-front/src/assets/CORPCODE.xml'

# # JSON 변환 및 출력
# json_data = xml_to_json(xml_file)
# print(json_data)

# # JSON 데이터를 파일에 저장
# with open('output.json', 'w', encoding='utf-8') as json_file:
#     json_file.write(json_data)

# # 코스피 종목 불러오기
# # file source: https://kind.krx.co.kr/corpgeneral/corpList.do?method=loadInitPage
# import pandas as pd

# # XLS 파일 경로
# xls_file_path = 'KOSPI_list.xlsx'  

# # XLS 파일 읽기
# df = pd.read_excel(xls_file_path)

# # DataFrame을 JSON 형식으로 변환
# json_data = df.to_json(orient='records', force_ascii=False, indent=4)

# # JSON 파일 저장
# json_file_path = 'KOSPI_list.json'
# with open(json_file_path, 'w', encoding='utf-8') as json_file:
#     json_file.write(json_data)

# print(f'JSON 파일이 {json_file_path}로 저장되었습니다.')

# 잘못 저장된 종목코드 (예: 000123 -> 123으로 저장됨) 수정 
import json

# JSON 파일 경로
json_file_path = 'KOSPI_list.json'

# JSON 파일 읽기
with open(json_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# 종목코드를 6자리 문자열로 변환
for corp in data:
    corp['종목코드'] = str(corp['종목코드']).zfill(6)

# 수정된 JSON 파일 저장
with open(json_file_path, 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print(f'JSON 파일이 수정되었습니다: {json_file_path}')
